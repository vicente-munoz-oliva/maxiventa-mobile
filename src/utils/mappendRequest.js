import errorHandling from "./errorHandling";
import formatToDate from "./formatToDate";

const mappendRequest = {

    signIn: async (data) => {

        const transformedData = {
            userName: data.username,
            password: data.password,
            orgId: data.orgId || null,
        };

        return transformedData;

    },

    saleFromPos: async ({ client, documentType, priceList, cart, payments, totalPending }) => {

        try {

            const transformedData = {
                businessPartnerId: parseInt(client),
                documentType: documentType === "Boleta" ? "B" : "F",
                turned: totalPending() > 0 ? 0 : totalPending(),
                order: false,
                orderNro: null,
                dueDate: formatToDate({ date: new Date() }),
                priceListId: parseInt(priceList),
                tipoVentaSiiId: 1,
                items: cart,
                payments
            }

            return transformedData;
        } catch (error) {
            return errorHandling(error)
        }



    },

}

export default mappendRequest;