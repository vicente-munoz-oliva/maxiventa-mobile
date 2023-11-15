'use client'

import {
    createContext,
    useContext,
    useState,
} from "react";

const context = createContext()

export const PriceListProvider = (props) => {

    const [priceLists, setPriceLists] = useState([]);

    return (
        <context.Provider value={{
            priceLists,
            setPriceLists
        }} {...props} />
    )
}

export function PriceListContext() {
    const c = useContext(context);
    if (!c)
        throw new Error('recaptcha Context')
    return c;
};
