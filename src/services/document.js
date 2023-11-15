import api from './api'

export const documentService = {

    createSale: async (data) => {
        return api.post("/document/saleFromPos", data);
    },

};

export default documentService