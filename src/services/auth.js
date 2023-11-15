import api from './api'

export async function signIn({ form, token }) {

    return await api.post('/login/signIn', form, {
        headers: {
            "grecaptcha": token
        }
    });

}
