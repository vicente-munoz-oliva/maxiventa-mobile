
const mappendResponse = {

    product: async (data) => {

        let transformedData = [];

        for (let i = 0; i < data.length; i++) {

            let product = data[i];

            transformedData.push({
                id: product.id,
                productId: product.productId,
                code: product.code,
                name: product.code + " - " + product.name,
                stock: product.stock,
                expirationDate: product.expirationDate,
                barCode: product.barCode
            })

        }

        return transformedData;

    },

    client: async (data) => {

        let transformedData = [];


        for (let i = 0; i < data.length; i++) {

            let client = data[i];

            transformedData.push({
                businessPartnerId: client.businessPartnerId,
                economicActivities: client.economicActivities,
                email: client.email,
                businessPartnerGroupId: client.businessPartnerGroupId,
                businessPartnerGroup: client.businessPartnerGroup,
                name: client.tax + " - " + client.name,
                isFactoring: client.isFactoring,
                isShipper: client.isShipper,
                tax: client.tax,
                phone: client.phone,
                isCreditCustomer: client.isCreditCustomer,
                creditLimit: client.creditLimit,
                creditUsed: client.creditUsed,
                creditAvailable: client.creditAvailable,
                address: client.address,
                communeId: client.communeId,
                regionId: client.regionId,
                commune: client.commune,
                turn: client.turn,
                turnId: client.turnId,
                isActive: client.isActive,
                created: client.created
            })

        }

        return transformedData;
    }

}

export default mappendResponse;