import * as Yup from "yup"

export function initialValues() {
    return {
        email: "",
        password: "",
        repeatPassword: ""
    }
}

export function validationSchema() {
    return Yup.object({
        email: Yup.string().email("Email invalido").required(true),
        password: Yup.string().required(true),
        repeatPassword: Yup.string().required(true).oneOf([Yup.ref( "password")], "La contraseña no es igual")
    })
}