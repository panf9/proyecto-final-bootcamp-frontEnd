import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { decodeToken } from "react-jwt";

const TrackingOrder = () => {

  const [orders, setOrders] = useState([])

  const navigate = useNavigate()
  const token = useState(JSON.parse(localStorage.getItem('auth') || null))



  const handleTracking = async () => {
    console.log("My token: ", token[0].accessToken);
    const myDecodedToken = decodeToken(token[0].accessToken);
    // console.log("Mi token decodificado ",myDecodedToken);
    const userID = myDecodedToken.identity
    console.log(userID);
    const url = `http://localhost:3000/orders/${userID}`

    const options = {
      method: 'GET',
      headers: {
        'authorization': `Bearer ${token[0].accessToken}`
      }
    }

    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data);

    if (data.message === 'jwt expired' || data.message === 'jwt malformed'){
      navigate('/login')
      localStorage.removeItem('auth')
    }else {
      setOrders(data)
    }
  }

  useEffect(() => {
    handleTracking()
  }, [] )

  return (
    <>
    {JSON.stringify(orders)}
    <ul>
      {
        orders.map(order => {
          return (
            <li key={order.id}>
              {}
            </li>
          )
        })
      }
    </ul>
    </>
  )
}

export default TrackingOrder