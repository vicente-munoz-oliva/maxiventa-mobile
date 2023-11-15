export default async function validateProcessPayment({ cart, client }) {

    if (!cart.length) throw "El carrito de compra esta vacio."

    if (!client) throw "Cliente es requerido."

    return true
}