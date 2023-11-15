import { useEffect } from "react";
import { ProductContext } from "../context/product";
import errorHandling from "../utils/errorHandling";
import productService from "../services/product";
import { Alert } from "react-native";
import mappendResponse from "../utils/mappendResponse";

export default function useProduct() {

    const { products, setProducts } = ProductContext();

    async function listProducts() {
        try {
            const { data } = await productService.getProductsWithStock();
            setProducts(await mappendResponse.product(data))
        } catch (error) {
            const errorMessage = errorHandling(error);
            Alert.alert(errorMessage)
        }
    }

    async function searchProduct({ barCode, priceListId }) {

        try {

            const { data } = await productService.getProductsFromLecturePos({
                barCode,
                priceListId
            });

            return data;

        } catch (error) {
            throw errorHandling(error);
        }
    }

    useEffect(() => {
        (async () =>
            await listProducts()
        )();
    }, [])

    return {
        products,
        setProducts,
        searchProduct
    }
}