import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import ScreenOption from './ScreenOption';

const Stack = createStackNavigator();

const AuthNavigator = () => {

    return (

        <Stack.Navigator>

            <Stack.Screen
                name="Login"
                options={ScreenOption.Login}
                component={LoginScreen}
            />

        </Stack.Navigator>
    );
};

export default AuthNavigator;
