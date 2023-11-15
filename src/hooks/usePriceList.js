import { useEffect } from "react";
import { PriceListContext } from "../context/priceList";
import errorHandling from "../utils/errorHandling";
import priceListService from "../services/priceList";
import { useState } from "react";

const taxIncluded = {
    "Boleta": 1,
    "Factura": 0,
}



export default function usePriceList() {

    const { priceLists, setPriceLists } = PriceListContext();
    const [priceListsByDocumentType, setPriceListsByDocumentType] = useState([]);

    async function listPriceLists() {
        try {
            const { data } = await priceListService.getAllPriceLists();
            setPriceLists(data)
        } catch (error) {
            errorHandling(error)
        }
    }

    async function listPriceListsByDocumentType({ documentType }) {

        setPriceListsByDocumentType(priceLists.filter(priceList => priceList.taxIncluded === taxIncluded[documentType]));
    }

    useEffect(() => {
        (async () => {
            await listPriceLists()
        })();
    }, [])

    return {
        priceLists,
        listPriceListsByDocumentType,
        priceListsByDocumentType
    }
}