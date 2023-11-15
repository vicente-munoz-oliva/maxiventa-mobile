
import NumericInput from "react-native-numeric-input";

export default function InputEditCartQty({
    qty,
    itemKey,
    updateItemQtyFromCart,
    maxQty
}) {

    return (

        <NumericInput
            totalWidth={95}
            totalHeight={40}
            iconSize={20}
            value={qty}
            
            minValue={0}
            maxValue={maxQty}
            valueType='real'
            rounded
            onChange={(value) => updateItemQtyFromCart({ newQty: value, barCode: itemKey })} />

    )
}