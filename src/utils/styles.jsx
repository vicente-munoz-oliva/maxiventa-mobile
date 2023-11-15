import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    cartListItem: {
        flex: 1,
        paddingVertical: 12,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },
    cartListItemContent: {
        flex: 1,
        flexDirection: 'row',
        gap: 16
    },
    cartListItemInfo: {
        flex: 1,
        flexDirection: 'column',
        gap: 3
    },
    containerPayment: {
        height: 450,
        flexDirection: 'column',
        columnGap: 3
    },
    paymentListItem: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    boxPaymentListItem: {
        flexDirection: 'column',
        paddingVertical: 6
    },
    boxPaymentList: {
        flex: 1,
        marginVertical: 12
    },
    boxResumenPayment: {
        height: 150,
        paddingTop: 16,
        borderTopWidth: 0.3
    },
    boxInputButton: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    fullWidth: {
        width: '100%'
    },
    paddingFive: {
        padding: 5,
    },
    homeScreen: {

        flex: 1,
        padding: 10,
        justifyContent: 'space-between',
        flexDirection: 'column',
        backgroundColor: 'white'
    },
    configScreen: {
        flex: 1,
        padding: 10,

        backgroundColor: 'white'
    },
    flexPadding: {
        flex: 1,
        padding: 5
    },
    flexRow: {
        flexDirection: 'row',

    },
    flexOne: {
        flex: 1,
    },
    containerCardList: {
        flex: 1,
        margin: 5,
        overflow: 'scroll',
        height: '100%',
        borderTopWidth: 0.3,
    },
    cartInputEditQty: {
        height: 40,
        width: 50,
        borderWidth: 0.1,
        borderRadius: 6,
    },
    containerResumen: {
        flexDirection: 'column',
        height: 80,
        marginTop: 5,
    },
    boxSearchProduct: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    orderBoxButton: {
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginTop: 10
    },
    orderDetail: {

        flexDirection: 'column',
        padding: 5,
        borderRadius: 8,
        backgroundColor: 'white',
        borderTopWidth: 0.3,
        justifyContent: 'flex-end'

    },
    resumenItems: {
        flex: 1,
        flexDirection: 'column',
        gap: 1
    },
    resumenItem: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    containerSignIn: {
        flex: 1,
        paddingTop: '35%',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 35,
    },
    items: {
        width: '100%',
        margin: 10
    },
    forgetPassword: {
        alignSelf: 'flex-end',
        margin: 10
    },
    containerLogo: {
        marginBottom: 50
    },
    buttonSignIn: {
        buttonStyle: {
            backgroundColor: '#047aff',
            height: 38,
            borderRadius: 5,
        },
        containerStyle: {
            width: '100%',
        }
    }
});

export default styles;