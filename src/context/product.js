'use client'

import {
    createContext,
    useContext,
    useState,
} from "react";

const context = createContext()

export const ProductProvider = (props) => {

    const [products, setProducts] = useState([]);

    return (
        <context.Provider value={{
            products,
            setProducts
        }} {...props} />
    )
}

export function ProductContext() {
    const c = useContext(context);
    if (!c)
        throw new Error('recaptcha Context')
    return c;
};
