import api from './api'

const clientService = {

    getAllClients: async () => {
        return api.get("/client");
    },
    createClient: async ({ form }) => {
        return api.get("/client", form)
    },



};

export default clientService