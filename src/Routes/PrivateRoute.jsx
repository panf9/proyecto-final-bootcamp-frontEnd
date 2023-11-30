import { useNavigate, Outlet } from "react-router-dom"
import { useContext, useEffect } from "react"
import { UserContext } from "../context/UserContext"


const PrivateRoute = () => {

  const { isAuth } = useContext(UserContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuth) {
      navigate('/my-account')
    }
  }, [isAuth])

  return (
    <Outlet />
  )
}

export default PrivateRoute