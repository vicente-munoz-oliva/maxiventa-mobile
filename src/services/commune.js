import api from './api'

export const communeService = {

    getAllCommunes: async () => {
        return api.get("/commune");
    },

};

export default communeService