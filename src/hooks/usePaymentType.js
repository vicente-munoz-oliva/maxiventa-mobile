import { useEffect } from "react";
import { useState } from "react"
import errorHandling from "../utils/errorHandling";
import paymentTypeService from "../services/paymentType";

export default function usePaymentType() {

    const [paymentsTypes, setPaymentsTypes] = useState([]);

    const [paymentType, setPaymentType] = useState(null);

    useEffect(() => {

        (async () => {
            try {
                const { data } = await paymentTypeService.getAllPaymentsTypes();
                setPaymentsTypes(data);
            } catch (error) {
                let errorMessage = errorHandling(error)
                console.log(errorMessage)
            }
        })();

    }, [])

    return {
        paymentsTypes,
        paymentType,
        setPaymentType
    }
}