import {useState, useEffect, createContext} from "react"
import { userCtrl } from "@/api/User"
import { authCtrl } from "@/api"
import { useRouter } from "next/router"

export const AuthContext = createContext()

export function AuthProvider(props) {
    const { children } = props
    const [user, setUser] = useState(null)
    const [isAdmin, setIsAdmin] = useState(false)
    const [loading, setLoading] = useState(true)
    const router = useRouter()

    useEffect(() => {
        (async () => {
            try {
                await login()
                setLoading(false)
            } catch (error) {
                console.log(error)
                setLoading(false)
            }
        })()
    }, [])

    const login = async () => {
        try {
            const response = await userCtrl.me()
            setUser(response)
            setIsAdmin(response.userStatus === 0)
            setLoading(false)
        } catch (error) {
            console.error(error)
            setLoading(false)
        }
    }

    const logOut = async () => {
        setUser(null)
        authCtrl.logOut()
        router.push("/")
    }

    const updateUser = (key, value) => {
        setUser({
            ...user,
            [key]: value,
        })
    }


    if(loading) return null

    const data = {
        user,
        login,
        isAdmin,
        logOut,
        updateUser
    }

    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
}