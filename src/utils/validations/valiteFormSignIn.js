import ChileanRutify from 'chilean-rutify'

export default function valiteFormSignIn(data) {

    if (!ChileanRutify.validRut(data.username))
        throw "Rut invalido."

    return data;

}