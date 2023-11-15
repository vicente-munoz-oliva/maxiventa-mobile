'use client'

import {
    createContext,
    useContext,
    useState,
} from "react";

const context = createContext()

export const ClientProvider = (props) => {

    const [clients, setClients] = useState([]);

    return (
        <context.Provider value={{
            clients,
            setClients
        }} {...props} />
    )
}

export function ClientContext() {
    const c = useContext(context);
    if (!c)
        throw new Error('recaptcha Context')
    return c;
};
