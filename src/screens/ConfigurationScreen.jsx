import { View } from "react-native";
import { Button } from "react-native-paper";
import useAuth from "../hooks/useAuth";
import styles from "../utils/styles";

export default function ConfigurationScreen() {

    const { closeSession } = useAuth();

    return (
        <View style={styles.configScreen}>
            <Button
                onPress={closeSession}

                mode="text"
            >CERRAR SESIÓN</Button>
        </View>
    )
}