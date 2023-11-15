import { Alert } from "react-native";
import { IconButton } from "react-native-paper";

export default function DeleteIconButton({
    size,
    removeFunction,
    itemKey
}) {
    return (
        <IconButton
            icon="delete-outline"
            size={size}
            iconColor='#f44336'
           
            onPress={() => {
                Alert.alert('Eliminación', 'Seguro desea eliminar el item seleccionado?', [
                    {
                        text: 'Cancelar',
                        style: 'cancel',
                    },
                    {
                        text: 'OK',
                        onPress: () => removeFunction(itemKey)
                    },
                ]);

            }}
        />
    )
}