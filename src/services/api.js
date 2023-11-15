import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const getCookieSession = async () => {
    const sessionData = await AsyncStorage.getItem('session');

    if (sessionData) {
        const session = JSON.parse(sessionData);
        return session.cookie;
    }
    return null;
};

const instance = axios.create({
    baseURL: 'https://smartyventa.cl/api',
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: false
});

instance.interceptors.request.use(async (config) => {

    const cookie = await getCookieSession();

    if (cookie) {

        config.headers['Cookie'] = cookie;
    }

    return config;
});

export default instance;
