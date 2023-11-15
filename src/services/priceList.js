import api from './api'

const priceListService = {

    getAllPriceLists: async () => {
        return api.get("/priceList");
    },

};

export default priceListService