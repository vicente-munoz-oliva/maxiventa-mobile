export default async function validateAddPaymentToPayments({ totalPending, paymentType }) {


    if (!paymentType) throw "Metodo de pago es requerido"

    if (totalPending() === 0) throw "Pago saldado"

    return true;

}