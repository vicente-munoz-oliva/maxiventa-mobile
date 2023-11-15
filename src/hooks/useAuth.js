import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../context/auth";

export default function useAuth() {

    const {
        isAuthenticated,
        setIsAuthenticated
    } = AuthContext();

    async function closeSession() {
        await AsyncStorage.removeItem('session');
        setIsAuthenticated(false);
    }

    return {
        isAuthenticated,
        setIsAuthenticated,
        closeSession,
    }
}