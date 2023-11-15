export default async function validateSearchProduct({ priceList, product }) {

    if (!priceList) throw "Precio de lista es requerido."

    if (!product) throw "Producto  es requerido."

    return true
}