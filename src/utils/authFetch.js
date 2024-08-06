import { authCtrl } from "@/api";

export async function authFetch(url, params) {
    const token = await authCtrl.retriveSession()

    const logOut = () => {
        authCtrl.logOut()
        window.location.replace("/")
    }

    if (!token) {
        console.log("Entro")
        logOut()
    } else {
        const paramsTemp = {
            ...params,
            headers: {
                ...params?.headers,
                Authorization: token,
            }
        }

        try {
            return await fetch(url, paramsTemp)
        } catch (error) {
            throw error
        }
    }
}