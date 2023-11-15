import api from './api'

export const regionService = {

    getAllRegions: async () => {
        return api.get("/region");
    },

};


export default regionService