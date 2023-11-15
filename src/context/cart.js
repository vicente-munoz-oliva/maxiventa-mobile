'use client'

import {
    createContext,
    useContext,
    useState,
} from "react";

const context = createContext()

export const CartProvider = (props) => {

    const [cart, setCart] = useState([]);

    return (
        <context.Provider value={{
            cart,
            setCart
        }} {...props} />
    )
}

export function CartContext() {
    const c = useContext(context);
    if (!c)
        throw new Error('recaptcha Context')
    return c;
};
