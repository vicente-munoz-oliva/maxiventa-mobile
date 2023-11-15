export default async function validateProcessTransaction({ payments, totalPending }) {

    if (!payments.length) throw "Debe seleccionar al menos un metodo de pago."

    if (totalPending() > 0) throw "Tiene un monto pendiente por pagar."

    return true
}