import HomeScreen from '../screens/HomeScreen';
import ScreenOption from './ScreenOption';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BusinessPartnerScreen from '../screens/BusinessPartnerScreen';
import ConfigurationScreen from '../screens/ConfigurationScreen';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {


    return (

        <Tab.Navigator>

            <Tab.Screen
                name="Home"
                options={ScreenOption.Home}
                component={HomeScreen}
            />

       {/*      <Tab.Screen
                name="BusinessPartner"
                options={ScreenOption.BusinessPartner}
                component={BusinessPartnerScreen}
            /> */}

            <Tab.Screen
                name="Configuration"
                options={ScreenOption.Configuration}
                component={ConfigurationScreen}
            />

        </Tab.Navigator>

    );

};

export default AppNavigator;
