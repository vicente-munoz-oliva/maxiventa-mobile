import { useEffect, useState } from "react";
import { Alert } from "react-native";
import useClient from "./useClient";
import usePriceList from "./usePriceList";
import useProduct from "./useProduct";
import useCart from "./useCart";
import useDialog from "./useDialog";
import validateSearchProduct from "../utils/validations/validateSearchProduct";
import validateProcessPayment from "../utils/validations/validateProcessPayment";
import usePaymentType from "./usePaymentType";
import usePayment from "./usePayment";
import validateAddPaymentToPayments from "../utils/validations/validateAddPaymentToPayments";
import validateProcessTransaction from "../utils/validations/validateProcessTransaction";
import mappendRequest from "../utils/mappendRequest";
import documentService from "../services/document";
import errorHandling from "../utils/errorHandling";
import useLoading from "./useLoading";

const documentTypes = [
    { label: 'Boleta', value: 'Boleta' },
    { label: 'Factura', value: 'Factura' },
];

export default function usePos() {

    const [documentType, setDocumentType] = useState(null);
    const [priceList, setPriceList] = useState(null);
    const [product, setProduct] = useState(null);
    const [client, setClient] = useState();

    const { clients } = useClient();
    const { products, searchProduct } = useProduct();
    const { priceListsByDocumentType, listPriceListsByDocumentType } = usePriceList();

    const {
        hideLoading,
        loading,
        showLoading
    } = useLoading();



    const {
        paymentsTypes,
        paymentType,
        setPaymentType
    } = usePaymentType();

    const {
        visible: paymentDialogVisible,
        hideModal: paymentDialogHide,
        showModal: paymentDialogShow,
    } = useDialog();

    const {
        cart,
        addItem,
        removeItem,
        updateItemQty,
        totalAmountWithTaxes,
        totalAmountWithoutTaxes,
        emply: emplyCart
    } = useCart();

    const {
        addPayment,
        removePayment,
        updatePaymentAmount,
        payments,
        emply: emplyPayments

    } = usePayment();

    async function cancelPayment() {
        paymentDialogHide()
        emplyPayments()
    }

    const totalPending = () => {

        let total = 0;

        payments.forEach(p => total = total + parseFloat(p.amount));

        if (documentType === "Boleta")
            return totalAmountWithTaxes() - total;
        else
            return totalAmountWithoutTaxes() - total;

    };

    const TotalToPay = () => {
        if (documentType === "Boleta")
            return totalAmountWithTaxes();
        else
            return totalAmountWithoutTaxes();

    };

    async function addPaymentToPayments() {

        try {

            await validateAddPaymentToPayments({ paymentType, totalPending });

            let selectedPaymentType = paymentsTypes.find(pt => pt.paymentTypeId == paymentType)

            await addPayment({
                paymentType: selectedPaymentType,
                amount: totalPending(),
                maxAvailable: 0
            });

            setPaymentType(null)

        } catch (error) {
            Alert.alert(error)

        }
    }

    async function processPayment() {
        try {
            await validateProcessPayment({ cart, documentType, client });
            paymentDialogShow()
        } catch (error) {
            Alert.alert(error)
        }
    }

    async function clearInputs() {
        paymentDialogHide()
        emplyCart()
        emplyPayments()
        setClient(null)
        setPriceList(null)
    }

    async function processTransaction() {
        try {
            showLoading();
            await validateProcessTransaction({ payments, totalPending });
            const data = await mappendRequest.saleFromPos({ client, documentType, priceList, cart, payments, totalPending })
            let response = await documentService.createSale(data)
            await clearInputs();
            hideLoading();
            Alert.alert(response.data.message)
        } catch (error) {
            hideLoading();
            const errorMessage = errorHandling(error)
            Alert.alert(errorMessage);
        }
    }

    async function addItemToCart() {

        try {

            await validateSearchProduct({ priceList, product });
            const data = await searchProduct({ barCode: product, priceListId: priceList })
            if (data) {
                await addItem({ item: data[0] });
                setProduct(null);
            }
        } catch (error) {
            Alert.alert(error)
        }
    }

    async function removeItemFromCart(barCode) {
        try {
            await removeItem({ barCode })
            Alert.alert("Item eliminado.")
        } catch (error) {
            Alert.alert(error)
        }
    }

    async function updateItemQtyFromCart({ barCode, newQty }) {
        try {
            await updateItemQty({ barCode, newQty })
        } catch (error) {
            Alert.alert(error)
        }
    }

    useEffect(() => {
        if (documentType) {
            listPriceListsByDocumentType({ documentType });
            if (documentType === "Boleta") {
                const clientBoleta = clients.find(client => client.tax === "11111111-1")
                if (clientBoleta)
                    setClient(clientBoleta?.businessPartnerId)
            }
            emplyCart()
        }
    }, [documentType])

    return {
        documentType,
        setDocumentType,
        priceList,
        clients,
        setPriceList,
        client,
        setClient,
        priceListsByDocumentType,
        documentTypes,
        products,
        cart,
        product,
        setProduct,
        addItemToCart,
        removeItemFromCart,
        updateItemQtyFromCart,
        totalAmountWithTaxes,
        totalAmountWithoutTaxes,
        paymentDialogVisible,
        cancelPayment,
        paymentDialogShow,
        processPayment,
        paymentsTypes,
        addPaymentToPayments,
        removePayment,
        updatePaymentAmount,
        payments,
        paymentType,
        setPaymentType,
        cancelPayment,
        totalPending,
        TotalToPay,
        processTransaction,
        loading
    }
}