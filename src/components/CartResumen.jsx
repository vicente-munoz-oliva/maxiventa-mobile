import { View } from "react-native";
import { Text } from "react-native-paper";
import formatToCurrency from "../utils/formatToCurrency";
import styles from "../utils/styles";
export default function CartResumen({
    documentType,
    totalAmountWithTaxes,
    totalAmountWithoutTaxes
}) {
    return (

        <View style={styles.containerResumen} >

            <View style={styles.resumenItems} >

                {documentType === "Factura" && (
                    <View style={styles.resumenItem} >

                        <Text variant="titleMedium">NETO:</Text>

                        <Text variant="titleMedium">{formatToCurrency(totalAmountWithTaxes())}</Text>

                    </View>
                )}

                {documentType === "Factura" && (
                    <View style={styles.resumenItem} >

                        <Text variant="titleMedium">IMPUESTO:</Text>

                        <Text variant="titleMedium">{formatToCurrency(totalAmountWithoutTaxes() - totalAmountWithTaxes())}</Text>

                    </View>
                )}

                <View style={styles.resumenItem} >

                    <Text variant="titleMedium">TOTAL:</Text>

                    <Text  variant="titleMedium">{formatToCurrency(documentType === "Boleta" ? totalAmountWithTaxes() : totalAmountWithoutTaxes())}</Text>

                </View>

            </View>

        </View>
    )
}

