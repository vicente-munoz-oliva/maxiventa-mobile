import api from './api'

const paymentTypeService = {

    getAllPaymentsTypes: async () => {
        return api.get("/paymentType");
    },

};

export default paymentTypeService