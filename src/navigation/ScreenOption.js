import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Image } from 'react-native';

let generic = {
    tabBarActiveTintColor: '#f59222',
    headerTitle: (props) => <Image
        style={{ width: 130, height: 25 }}
        source={require('../../assets/s.png')}
    />,
    headerStyle: {
        backgroundColor: '#f59222',
    },
    tabBarInactiveTintColor: 'gray',
}

const ScreenOption = {
    "Login": {
        title: 'Login',
        headerTintColor: '#fff',
        headerShown: false,
        headerStyle: {
            backgroundColor: 'rgb(17, 24, 39)'
        }
    },
    "Home": {
        title: 'Venta',
        ...generic,
        tabBarIcon: ({ focused, color, size }) => {
            return <Feather name="shopping-bag" size={size} color={focused ? "#f59222" : "#434b4d"} />
        },

    },
    "BusinessPartner": {
        headerLeft: () => null,
        title: 'Socio de negocio',
        headerTintColor: '#fff',
        headerStyle: {
            backgroundColor: 'rgb(17, 24, 39)'
        }
    },
    "Configuration": {

        title: 'Configuración',
        ...generic,
        tabBarIcon: ({ focused, color, size }) => {
            return <AntDesign name="setting" size={size} color={focused ? "#f59222" : "#434b4d"} />
        },
    }
}

export default ScreenOption