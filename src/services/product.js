import api from './api'

export const productService = {

    getProductsWithStock: async () => {
        return api.get("/product/withStock");
    },
    getProductsFromLecturePos: async ({ barCode, priceListId }) => {
        return api.get("/product/lectureFromPOS", {
            params: {
                barCode,
                priceListId
            }
        });
    },

};


export default productService