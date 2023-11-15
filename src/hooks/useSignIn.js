import { useState } from "react";
import { signIn } from "../services/auth";
import mappendRequest from "../utils/mappendRequest";
import errorHandling from "../utils/errorHandling";
import { RecaptchaContext } from "../context/recaptcha";
import useOrg from "./useOrg";
import { Alert } from "react-native";
import valiteFormSignIn from "../utils/validations/valiteFormSignIn";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useAuth from "./useAuth";
import ChileanRutify from 'chilean-rutify'
import { useEffect } from "react";

export default function SignIn() {

    const { setIsAuthenticated } = useAuth()

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [signInStep, setSignInStep] = useState(1);

    const { pushDataOrg } = useOrg();

    const { token, send } = RecaptchaContext();


    async function handleSignIn({ orgId }) {

        send()

        const timer = setTimeout(async () => {

            try {

                let form = await valiteFormSignIn({ username, password, orgId });

                form = await mappendRequest.signIn(form);

                const { data, status, headers } = await signIn({ form, token });

                if (status === 201) {
                    await pushDataOrg(data)
                    setSignInStep(2);
                }

                if (status === 200) {

                    let cookie = headers['set-cookie'][0];

                    await AsyncStorage.setItem('session', JSON.stringify({
                        cookie,
                        expirationTime: Date.now() + 8 * 60 * 60 * 1000
                    }
                    ))

                    setIsAuthenticated(true)
                }

            } catch (error) {
                let errorMessage = errorHandling(error)
                Alert.alert('Login', errorMessage)
            }

        }, 500);


        return () => clearTimeout(timer);

    }

    const rutIsValid = username?.length > 0 && !ChileanRutify.validRut(username);

    return {
        username,
        password,
        setUsername,
        setPassword,
        handleSignIn,
        signInStep,
        rutIsValid
    }
}