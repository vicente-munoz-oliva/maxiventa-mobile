import { useState } from "react";

export default function usePayment() {

    const [payments, setPayments] = useState([]);

    async function addPayment({ paymentType, maxAvailable, amount }) {

        let newPayment = {
            paymentTypeId: paymentType.paymentTypeId,
            name: paymentType.name,
            amount,
            files: [],
            maxAvailable,
            reference: '',
        }

        setPayments([...payments, newPayment])
    }


    async function removePayment(index) {
        let newPayments = [...payments];
        newPayments.splice(index, 1);
        setPayments(newPayments)
    }

    async function updatePaymentAmount({ index, newAmount }) {
        let newPayments = [...payments];
        newPayments[index]['amount'] = parseFloat(newAmount)
        setPayments(newPayments)
    }

    async function emply() {
        setPayments([])
    }

    return {
        addPayment,
        removePayment,
        updatePaymentAmount,
        payments,
        emply

    }
}