import Recaptcha from 'react-native-recaptcha-that-works';
import { RecaptchaContext } from '../context/recaptcha';
import { useEffect } from 'react';
import useAuth from '../hooks/useAuth';

export default function Rc() {

    const {
        recaptcha,
        onVerify,
        onExpire,
        send
    } = RecaptchaContext();

    const { isAuthenticated } = useAuth()

    useEffect(() => {
        if (!isAuthenticated)
            send()
    }, [])

    return (
        
        <Recaptcha
            ref={recaptcha}
            siteKey="6Lc0lSwnAAAAAOXzwRO8NkzWWnugRTeD_M1T7c_v"
            baseUrl="https://smartyventa.cl/"
            onVerify={onVerify}
            onExpire={onExpire}
            size="invisible"
            hideBadge={true}
        />
    )
}