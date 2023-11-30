import { useContext, useEffect, useState } from "react"
import { UserContext } from "../context/UserContext"
import { decodeToken } from "react-jwt";
import { useNavigate } from "react-router-dom";

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const Checkout = () => {
  const token = JSON.parse(localStorage.getItem('auth')) || null
  const { productList, setTotalCart } = useContext(UserContext)
  const navigate = useNavigate()
  const [subTotal, setSubTotal] = useState(0)
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    dni: '',
    phone: '',
    country: '',
    state: '',
    city: '',
    zip: '',
    address: '',
    address_comp: '',
    subTotal: 0,
    shipping: 10,
  })


  const handleTotal = () => {
    let total = 0 
    productList.forEach(element => {
      total = total + element.price * element.qty
    });
    setSubTotal(total)
  }

  const handleChange = (event) => {
    const value = event.target.value
    const name  = event.target.name 

    setForm({ ...form, [name]:value, "subTotal":subTotal })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!token){
      MySwal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: "Por favor, inicie sesión.",
      })

      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          cancelButton: "bg-[#A90000] py-3 rounded text-sm font-semibold  text-white w-24",
          confirmButton: "bg-[#FAD505] py-3 rounded text-sm font-semibold text-white w-24 ml-5"
        },
        buttonsStyling: false
      });
      swalWithBootstrapButtons.fire({
        title: "Oops...",
        text: "Antes de continuar, por favor, inicie sesión.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Iniciar Sesión",
        cancelButtonText: "Cancelar!",
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          console.log("Dentro de resut");
          navigate("/login")
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          // swalWithBootstrapButtons.fire({
          //   title: "Cancelled",
          //   text: "Your imaginary file is safe :)",
          //   icon: "error"
          // });
        }
      });
      return
    }

    const myDecodedToken = decodeToken(token.accessToken);
    const user_id = myDecodedToken.identity

    const products = { ...productList }
    const persInfo = { ...form }
    const orderNew = JSON.stringify({products, persInfo})
    const order_data = {order:orderNew, user_id:user_id}

    const url = 'http://localhost:3000/orders'

    const options = {
      method: 'POST',
      headers: {
        'authorization': `bearer ${token.accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...order_data })
    }
    const response = await fetch(url, options)
    console.log(response);
    const data = await response.json()

    if ( data.user_id ){
      localStorage.removeItem("product")
      setTotalCart(0)
      navigate('/tracking')            
    }
  }

  useEffect(()=>{
    handleTotal()
  }, [])

  return (
    <>
    <div className="flex flex-col items-center py-12 p-8  border mt-5">
      <form onSubmit={handleSubmit} className="flex gap-5 my-3">
      <div>
        <div className="border rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-light ">Personal Information</h2>
          <table>
            <tbody>
              <tr>
                <td>
                <label>First name</label>
                </td>
                <td>
                <input 
                  type="text" 
                  name="first_name" 
                  required 
                  onChange={handleChange}
                  className="w-96 ml-3 border rounded-md h-12 pl-3 outline-0"
                />
                </td>
              </tr>
              <tr>
                <td>
                <label>Last Name</label>
                </td>
                <td>
                <input 
                  type="text" 
                  name="last_name" 
                  required 
                  onChange={handleChange}
                  className="w-96 ml-3 border rounded-md h-12 pl-3 outline-0"
                />
                </td>
              </tr>
              <tr>
                <td>
                  <label>DNI</label>
                </td>
                <td>
                  <input 
                    type="number" 
                    name="dni" 
                    required 
                    onChange={handleChange}
                    className="w-96 ml-3 border rounded-md h-12 pl-3 outline-0"
                  />
                </td>
              </tr>
              <tr>
                <td>
                <label>Phone</label>
                </td>
                <td>
                  <input 
                    type="number" 
                    name="phone" 
                    required 
                    onChange={handleChange}
                    className="w-96 ml-3 border rounded-md h-12 pl-3 outline-0"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="border rounded-lg p-6">
          <h2 className="text-2xl font-light">Address</h2>
          <table>
            <tbody>
              <tr>
                <td>
                <label>Country</label>
                </td>
                <td>
                <input 
                  type="text" 
                  name="country" 
                  required 
                  onChange={handleChange}
                  className="w-96 ml-3 border rounded-md h-12 pl-3 outline-0"
                />
                </td>
              </tr>
              <tr>
                <td>
                <label>State</label>
                </td>
                <td>
                <input 
                  type="text" 
                  name="state" 
                  required 
                  onChange={handleChange}
                  className="w-96 ml-3 border rounded-md h-12 pl-3 outline-0"
                />
                </td>
              </tr>
              <tr>
                <td>
                <label>City</label>
                </td>
                <td>
                <input 
                  type="text" 
                  name="city" 
                  required 
                  onChange={handleChange}
                  className="w-96 ml-3 border rounded-md h-12 pl-3 outline-0"
                />
                </td>
              </tr>
              <tr>
                <td>
                <label>Zip/Postal Code</label>
                </td>
                <td>
                <input 
                  type="number" 
                  name="zip" 
                  required 
                  onChange={handleChange}
                  className="w-96 ml-3 border rounded-md h-12 pl-3 outline-0"
                />
                </td>
              </tr>
              <tr>
                <td>
                <label>Address</label>
                </td>
                <td>
                <input 
                  type="text" 
                  name="address" 
                  required 
                  onChange={handleChange}
                  className="w-96 ml-3 border rounded-md h-12 pl-3 outline-0"
                />
                </td>
              </tr>
              <tr>
                <td>
                <label>Address Complement</label>
                </td>
                <td>
                <input 
                  type="text" 
                  name="addreess_comp" 
                  onChange={handleChange}
                  className="w-96 ml-3 border rounded-md h-12 pl-3 outline-0"
                />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="border rounded-lg p-6 h-auto">
        <ul>
          {
              productList.map( product => {
                return (
                  <>
                    <li key={product.id} className="flex items-center my-2">
                      <img src={product.img} width="60"  className="border rounded-lg"/>
                      <div>
                      <h3 className="text-sm font-semibold text-[#0961B3]">{product.name}</h3>
                      <p className="font-light text-md">x{product.qty}</p>
                      <p className="font-semibold text-[#A90000]">$ {product.price}</p>
                      </div>
                    </li>
                    <hr />
                  </>
                )
              })
            
          }
        </ul>
        <div className="my-5 flex flex-col gap-5">
          <div className="flex justify-between px-5">
            <span>SubTotal</span>
            <span>${subTotal}</span>
          </div>
          <div className="flex justify-between px-5">
            <span>Shipping</span>
            <span>$10</span>
          </div>
        </div>
        <hr />
        <div className="flex justify-between px-5 font-bold text-xl my-4">
          <span>TOTAL =</span>
          <span>${subTotal + 10}</span>
        </div>
        <input type="submit" value="Place Order" className="bg-[#FAD505] h-12 w-full rounded-md mt-4" />
      </div>
      </form>
    </div>
    </> 
  )
}

export default Checkout