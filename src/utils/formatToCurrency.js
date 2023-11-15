export default function formatToCurrency(value) {

    const formattedCurrency = (new Number(value)).toLocaleString('es-CL', {
        style: 'currency',
        currency: 'CLP',
    });

    return formattedCurrency;

}