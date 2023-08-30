import { useState } from "react"


const useAuth = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('auth')) || { email: '' })

    const isAuth = Boolean(user?.email)


    return {
        isAuth
    }
}

export default useAuth