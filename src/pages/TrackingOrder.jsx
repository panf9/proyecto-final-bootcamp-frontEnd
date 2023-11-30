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
    console.log("DATA: ", data);

    if (data.message === 'jwt expired' || data.message === 'jwt malformed'){
      navigate('/login')
      localStorage.removeItem('auth')
    }else {
      setOrders(data)
    }
  }

  const handleOrder = (event) => {
    const id = event.target.dataset.id
    console.log(event.target.dataset.id)
    navigate(`/tracking/${id}`)
  }

  useEffect(() => {
    handleTracking()
  }, [] )

  return (
    <>
    {/* {JSON.stringify(orders)} */}
    <div className="mb-10">
      <h2 className="font-semibold text-2xl">Order History</h2>
    </div>
    <ul>
      {
        orders.map(order => {
          const pedido = JSON.parse(order.order)
          return (
            <>
              <div className="flex items-center">
                <li key={order.id} className="font-normal text-md py-2 ">
                  <span className="font-bold py-4">#{order.id + 1000}</span>
                  <span className="px-1 pl-10">{pedido.persInfo.first_name}</span>
                  <span className="px-1">{pedido.persInfo.last_name}</span>
                  <span className="font-bold pl-10 ">${pedido.persInfo.subTotal + pedido.persInfo.shipping}</span>
                </li>
                <button 
                  className="bg-[#FAD505] px-2 border rounded-lg h-7 ml-10"
                  data-id= {order.id}
                  onClick={handleOrder}
                >ver</button>
              </div>
              <hr />
            </>
          )
        })
      }
    </ul>
    </>
  )
}

export default TrackingOrder