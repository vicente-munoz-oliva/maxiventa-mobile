import { CartContext } from "../context/cart"

export default function useCart() {

    const { cart, setCart } = CartContext();

    async function addItem({ item }) {
        const exist = cart.find(actualItem => actualItem.barCode === item.barCode && actualItem.productId === item.productId);
        if (exist) throw "Producto ya ingresado en el carrito de compra."
        setCart([...cart, item])
    }

    async function removeItem({ barCode }) {
        setCart(cart.filter(actualItem => actualItem.barCode !== barCode))
    }

    async function updateItemQty({ barCode, newQty }) {
        const itemIndex = cart.findIndex(actualItem => actualItem.barCode === barCode);
        let dataToUpdate = [...cart];
        dataToUpdate[itemIndex]['amount'] = newQty;
        setCart(dataToUpdate);
    }


    const totalLines = () => cart.length;

    const totalItems = () => {
        let total = 0;
        cart.forEach(e => total = total + parseFloat(e.amount))
        return total;
    }

    const totalAmountWithTaxes = () => {
        let total = 0;
        cart.forEach(item => total = total + (parseFloat(item.price) * parseFloat(item.amount)))
        return total;
    }

    async function emply() {
        setCart([]);
    }

    const totalAmountWithoutTaxes = () => {

        let total = 0;

        cart.forEach(item => {
            let price = item.price;
            let tax = item.rate;
            let discount = 0;
            let amount = parseFloat(item.amount);
            let totalWithDiscount = price / (1 + (discount / 100))
            total = total + ((totalWithDiscount * (1 + (tax / 100))) * parseFloat(amount))
        })

        return total;

    }

    return {
        cart,
        addItem,
        removeItem,
        updateItemQty,
        totalAmountWithTaxes,
        totalAmountWithoutTaxes,
        emply,
        totalLines,
        totalItems
    }
}