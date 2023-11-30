import { Link, useNavigate } from "react-router-dom"
import { useContext, useState } from "react"

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { UserContext } from "../context/UserContext"

const MySwal = withReactContent(Swal)


const SignIn = () => {
  const { storeUser } = useContext(UserContext)
  const navigate = useNavigate()

  const [form, setForm] = useState({
    email: "",
    password: "",
  })

  const [visible, setVisible] = useState(false)


  const handleChange = (event) => {
    const value = event.target.value 
    const name = event.target.name
    // console.log(name + ": " + value);
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const email = form.email 
    const password = form.password

    const user = {email, password}
    console.log(user);

    const url = 'http://localhost:3000/auth/signin'

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user)
    }

    const response = await fetch(url, options)
    const data = await response.json()

    console.log(data);

    // setForm({email: '', password:''})

    if (data.accessToken) {
      console.log("Iniciaste sensión correctamente");

      storeUser(data)
      
      navigate('/')
    }else {
      MySwal.fire({
        icon: 'error',
        title: 'Oops...',
        text: data.message,
        confirmButtonColor: '#FAD505',
        footer: '<a href="">Vuela a intentarlo.</a>'
      })
    }
  }

  const handleClick = () => {
    setVisible(!visible)
  }

  return (
    <>
      <div>
          <h1 className="text-[18px] font-[500] mt-6 mb-1">Log in To Your Account</h1>
          <hr />
      </div>

      <div className="border mt-5">
        <form action="" className="flex flex-col gap-5 my-10 items-center" onSubmit={handleSubmit}>
          <div className="flex flex-col items-end gap-5">
            <div>
              <label>Email</label>
              <input 
                type="email" 
                name="email" 
                required 
                className="md:w-96 ml-3 border rounded-md h-12 pl-3 outline-0"
                onChange={handleChange}
              />
            </div>
            <div className="w-full inline-flex">
              <label>password</label>
              <input 
                type={visible? "text": "password"} 
                name="password" 
                required 
                className=" md:w-80 ml-3 border rounded-l-md h-12 pl-3 outline-0"
                onChange={handleChange}
              />
              <button 
                type="button" 
                data-action="show-password" 
                data-text-show="Show" 
                className="bg-[#FAD505] h-12 w-16 rounded-r-md"
                onClick={handleClick}
              >
                {visible? 'Hide':'Show'}
              </button>
            </div>
          </div>
          <Link to='password-recovery' className="hover:text-[#0961B3]">Forgot your password?</Link>
          <input type="submit" name="" value="Sign In" className="bg-[#FAD505] h-12 w-28 rounded-md"/>
          <Link to='registration' className="hover:text-[#0961B3]">No account? Create one here</Link>
        </form>
      </div>
    </>   
  )
}

export default SignIn