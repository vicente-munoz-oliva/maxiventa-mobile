import AppNavigator from "./AppNavigator";
import AuthNavigator from "./AuthNavigator";
import useAuth from "../hooks/useAuth";


export default function MainNavigator() {

    const { isAuthenticated } = useAuth();

    return isAuthenticated ? <AppNavigator /> : <AuthNavigator />

}