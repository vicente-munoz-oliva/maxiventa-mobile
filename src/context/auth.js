
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";

import {
    createContext,
    useContext,
    useState,
} from "react";

import { AppState } from "react-native";

const context = createContext()

export const AuthProvider = (props) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    async function validateSession() {
        const session = await AsyncStorage.getItem('session');
        if (session) {
            const sessionData = JSON.parse(session);
            if (sessionData.expirationTime && sessionData.expirationTime > Date.now()) {
                setIsAuthenticated(true);
            } else {
                await AsyncStorage.removeItem('session');
                setIsAuthenticated(false);
            }
        } else {
            setIsAuthenticated(false);
        }
    }

    useEffect(() => {

        (async () => await validateSession())()

        const handleAppStateChange = async (nextAppState) => {
            if (nextAppState === 'active') {
                await validateSession()
            }
        };

        const subscription = AppState.addEventListener("change", handleAppStateChange);

        return () => {
            subscription.remove()
        }
    }, []);

    return (
        <context.Provider value={{
            isAuthenticated,
            setIsAuthenticated
        }} {...props} />
    )
}

export function AuthContext() {
    const c = useContext(context);
    if (!c)
        throw new Error('Auth Context')
    return c;
};
