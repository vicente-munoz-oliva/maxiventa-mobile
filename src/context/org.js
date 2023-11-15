'use client'

import {
    createContext,
    useContext,
    useState,
} from "react";

const context = createContext()

export const OrgProvider = (props) => {

    const [orgs, setOrgs] = useState([]);

    return (
        <context.Provider value={{
            orgs,
            setOrgs
        }} {...props} />
    )
}

export function OrgContext() {
    const c = useContext(context);
    if (!c)
        throw new Error('recaptcha Context')
    return c;
};
