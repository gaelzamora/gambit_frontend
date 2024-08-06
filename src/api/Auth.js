import { signUp, resendSignUpCode, confirmSignUp, signIn , fetchAuthSession, autoSignIn, getCurrentUser, signOut } from "@aws-amplify/auth"

async function register(email, password) {
    try {
        const response = await signUp({
            username: email,
            password
        })

        console.log(response)
        return response
    } catch (error) {
        throw error
    }
} 

async function resendCode(email) {
    try {
        await resendSignUpCode({username: email})
    } catch (error) {
        throw error
    }
}

async function confirmation(email, code) {
    try {
        await confirmSignUp(email, code)
        return true
    } catch (error) {
        console.log(error)
    }
}

async function login(email, password) {
    try {
        await signIn({
            username: email,
            password
        })

        const session = await fetchAuthSession({
            forceRefresh: false
        })

        console.log(session)

        return session
    } catch (error) {
        console.log("Otro error")
        throw error
    }
}

async function retriveSession() {
    try {
        const session = await fetchAuthSession({
            forceRefresh: false
        })

        console.log(session.tokens.accessToken)

        return session.tokens.accessToken
    } catch (error) {

        console.log("No pudo mantenerse la session")
        throw error
    }
}

async function logOut() {
    try {
        await signOut()
    } catch(error) {
        throw error
    }
}

export const authCtrl = {
    register,
    resendCode,
    confirmation,
    login,
    retriveSession,
    logOut
}