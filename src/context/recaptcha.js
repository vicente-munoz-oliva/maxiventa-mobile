'use client'

import {
    createContext,
    useContext,
    useRef,
    useState,
} from "react";

const context = createContext()

export const RecaptchaProvider = (props) => {

    const recaptcha = useRef(null);
    const [token, setToken] = useState(null)

    const send = () => recaptcha.current.open()

    const onVerify = value => setToken(value)

    const onExpire = () => console.warn('expired recaptcha!');

    return (
        <context.Provider value={{
            recaptcha,
            onVerify,
            onExpire,
            send,
            token
        }} {...props} />
    )
}

export function RecaptchaContext() {
    const c = useContext(context);
    if (!c)
        throw new Error('recaptcha Context')
    return c;
};
