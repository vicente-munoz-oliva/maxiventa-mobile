import { TouchableWithoutFeedback, View } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';
import { Keyboard } from 'react-native';
import useSignIn from '../../hooks/useSignIn'
import Logo from '../Logo';
import styles from '../../utils/styles';
import useOrg from '../../hooks/useOrg';
import OrganizationListSelected from './OrganizationListSelected';
import ChileanRutify from 'chilean-rutify'

const SignIn = () => {

    const {
        username,
        password,
        setUsername,
        setPassword,
        handleSignIn,
        signInStep,
        rutIsValid
    } = useSignIn();

    const { orgs } = useOrg();

    const handleScreenPress = () => Keyboard.dismiss();

    return (

        <TouchableWithoutFeedback onPress={handleScreenPress}>

            <View style={{ flex: 1 }}>

                {signInStep === 1 &&

                    <View style={styles.containerSignIn}>

                        <View style={styles.containerLogo} >
                            <Logo
                                width={325}
                                height={70}
                            />
                        </View>

                        <TextInput
                            mode='outlined'
                            dense={true}
                            placeholder='Rut'
                            style={styles.items}
                            activeOutlineColor='#f59222'
                            error={rutIsValid}
                            value={username}
                            onChangeText={(text) => setUsername(ChileanRutify.formatRut(text))}
                        />

                        <TextInput
                            mode='outlined'
                            dense={true}
                            activeOutlineColor='#f59222'
                            style={styles.items}
                            placeholder='Contraseña'
                            secureTextEntry
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                        />

                        <Button
                            onPress={() => {
                                handleScreenPress();
                                handleSignIn({ orgId: null })
                            }}
                            mode="contained"
                            style={styles.items}
                            buttonColor='#f59222'
                        >
                            Iniciar Sesión
                        </Button>

                        <View style={styles.forgetPassword} >
                            <Text variant="labelLarge">has olvidado tu contraseña ?</Text>
                        </View>

                    </View>
                }

                {signInStep === 2 &&
                    <OrganizationListSelected
                        handleSignIn={handleSignIn}
                        orgs={orgs}
                    />
                }

            </View>

        </TouchableWithoutFeedback>

    );
};


export default SignIn;
