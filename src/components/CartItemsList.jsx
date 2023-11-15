import { ScrollView, View } from "react-native";
import { Text } from "react-native-paper";
import DeleteIconButton from "./DeleteIconButton";
import formatToCurrency from "../utils/formatToCurrency";
import InputEditCartQty from "./InputEditCartQty";
import styles from "../utils/styles";

export default function CartItemsList({
    cart,
    removeItemFromCart,
    updateItemQtyFromCart
}) {
    return (
        <ScrollView style={styles.containerCardList} >

            {cart.map(item => (

                <View key={item.barCode + "-" + item.productId} style={styles.cartListItem} >

                    <View style={styles.cartListItemContent} >

                        <InputEditCartQty
                            maxQty={parseFloat(item.stock)}
                            qty={item.amount}
                            itemKey={item.barCode}
                            updateItemQtyFromCart={updateItemQtyFromCart}
                        />

                        <View style={styles.cartListItemInfo} >
                            <Text style={{ fontSize: 12 }} variant="labelLarge">{item.name}</Text>
                            <Text style={{ fontSize: 12 }} variant="labelLarge">Precio: {formatToCurrency(item.price)}</Text>
                        </View>

                    </View>

                    <DeleteIconButton
                        itemKey={item.barCode}
                        removeFunction={removeItemFromCart}
                        size={18}
                    />

                </View>

            ))}


        </ScrollView>
    )
}

