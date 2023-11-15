
import { View } from 'react-native';
import Select from '../components/Select';
import usePos from '../hooks/usePos';
import { Button, IconButton } from 'react-native-paper';
import CartItemsList from '../components/CartItemsList';
import CartResumen from '../components/CartResumen';
import styles from '../utils/styles';
import Dialog from '../components/Dialog';
import Payment from '../components/Payment';

const HomeScreen = () => {

    const {
        documentType,
        setDocumentType,
        priceList,
        setPriceList,
        clients,
        priceListsByDocumentType,
        client,
        setClient,
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
        processPayment,
        paymentsTypes,
        addPaymentToPayments,
        removePayment,
        updatePaymentAmount,
        payments,
        paymentType,
        setPaymentType,
        totalPending,
        TotalToPay,
        processTransaction,
        loading
    } = usePos();

    return (

        <View style={styles.homeScreen} >

            <Dialog name={"Pago"} visible={paymentDialogVisible}>

                <Payment
                    totalPending={totalPending}
                    cancelPayment={cancelPayment}
                    addPaymentToPayments={addPaymentToPayments}
                    removePayment={removePayment}
                    updatePaymentAmount={updatePaymentAmount}
                    payments={payments}
                    paymentsTypes={paymentsTypes}
                    paymentType={paymentType}
                    setPaymentType={setPaymentType}
                    TotalToPay={TotalToPay}
                    processTransaction={processTransaction}
                    loading={loading}
                />

            </Dialog>

            <View>

                <View style={styles.flexRow}>

                    <View style={styles.flexPadding} >
                        <Select
                            name="Tipo documento"
                            labelField={"label"}
                            valueField={"value"}
                            data={documentTypes}
                            setValue={setDocumentType}
                            value={documentType}
                        />
                    </View>

                    <View style={styles.flexPadding} >
                        <Select
                            name="Lista de precio"
                            data={priceListsByDocumentType}
                            labelField={"name"}
                            valueField={"priceListId"}
                            setValue={setPriceList}
                            value={priceList}
                        />
                    </View>

                </View>

                <View style={styles.paddingFive} >
                    <Select
                        name="Seleccione cliente"
                        data={clients}
                        setValue={setClient}
                        value={client}
                        labelField={"name"}
                        valueField={"businessPartnerId"}
                    />
                </View>

                <View style={styles.paddingFive} >
                    <View style={styles.boxSearchProduct} >
                        <View style={styles.flexOne} >
                            <Select
                                name="Seleccione producto"
                                data={products}
                                setValue={setProduct}
                                value={product}
                                labelField={"name"}
                                valueField={"barCode"}
                            />
                        </View>

                        <IconButton
                            icon="plus"
                            mode='contained'
                            style={{ borderRadius: 6 }}
                            iconColor='#212121'
                            containerColor='white'
                            size={24}
                            onPress={addItemToCart}
                        />

                    </View>
                </View>
            </View>

            <CartItemsList
                updateItemQtyFromCart={updateItemQtyFromCart}
                cart={cart}
                removeItemFromCart={removeItemFromCart}
            />

            <View style={styles.orderDetail} >

                <CartResumen
                    documentType={documentType}
                    totalAmountWithTaxes={totalAmountWithTaxes}
                    totalAmountWithoutTaxes={totalAmountWithoutTaxes}
                />

                <View style={styles.orderBoxButton} >
                    <Button
                        style={styles.fullWidth}
                        buttonColor='#f59222'
                        mode="contained"
                        onPress={processPayment}
                    >Finalizar venta
                    </Button>
                </View>

            </View>

        </View>

    );
};

export default HomeScreen;
