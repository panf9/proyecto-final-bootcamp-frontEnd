import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const CreateAccount = () => {
  const [form, setForm] = useState({
    name: '',
    last_name: '',
    email: '',
    password: '',
    username: ''
  })
  const navigate = useNavigate()

  const handleChange = (event) => {
    const value = event.target.value
    const name  = event.target.name 

    setForm({ ...form, [name]: value})
    console.log(form);
  }

  // const verifyEmail = async (url) => {
  //   const email = form.email

  //   const response = await fetch(`${url}?email=${email}`)
  //   const data = await response.json()
  //   // console.log("En el everifuEmail", data);
  //   return data
  // }

  const handleSubmit = async (event) => {

    event.preventDefault()

    const url = 'http://localhost:3000/users'

    const user = { ...form }
    console.log("User enviado: ", user);

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
    navigate('/my-account')

    // const detectedUser = await verifyEmail(url)
    // console.log("detected User", detectedUser);

    // if (detectedUser.length === 1) {
    //   Swal.fire({
    //     title: 'Esta dirección de correo electrónico ya existe',
    //     icon: 'warning',
    //     confirmButtonColor: '#FAD505',
    //     confirmButtonText: 'Iniciar sesión'
    //   }).then(() => {
    //     navigate('/my-account')
    //   })
    // }else{
    //   const user = {
    //     ...form
    //   }
    //   console.log("User enviado: ", user);
  
    //   const options = {
    //     method: 'POST',
    //     body: JSON.stringify(user),
    //     headers: {
    //       'Content-Type': 'application/json',
    //     }
    //   }
  
    //   const response = await fetch(url, options)
    //   const data = await response.json()
    //   console.log(data);

    //   MySwal.fire({
    //     position: 'top-end',
    //     icon: 'success',
    //     title: 'Usuario creado correctamente',
    //     showConfirmButton: false,
    //     timer: 1500
    //   })
    // }

  }

  return (
    <>
    <div>
        <h1 className="text-[18px] font-[500] mt-6 mb-1">Create An Account</h1>
        <hr />
    </div>
    <div className="flex flex-col items-center py-12 p-8  border mt-5">
      <p>Already have an account? <Link to='/my-account' className="underline">Log in instead!</Link></p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 my-3 items-end">
        <div>
          <label>First name</label>
          <input 
            type="text" 
            name="name" 
            required 
            onChange={handleChange}
            className="w-96 ml-3 border rounded-md h-12 pl-3 outline-0"
          />
        </div>
        <div>
          <label>Last Name</label>
          <input 
            type="text" 
            name="last_name" 
            required 
            onChange={handleChange}
            className="w-96 ml-3 border rounded-md h-12 pl-3 outline-0"
          />
        </div>
        <div>
          <label>Email</label>
          <input 
            type="email" 
            name="email" 
            required 
            onChange={handleChange}
            className="w-96 ml-3 border rounded-md h-12 pl-3 outline-0"
          />
        </div>
        <div>
          <label>Password</label>
          <input 
            type="password" 
            name="password" 
            required 
            onChange={handleChange}
            className="w-96 ml-3 border rounded-md h-12 pl-3 outline-0"
          />
        </div>
        <div>
          <label>User Name</label>
          <input 
            type="text" 
            name="username" 
            required
            onChange={handleChange}
            className="w-96 ml-3 border rounded-md h-12 pl-3 outline-0"
          />
        </div>
        
        <input type="submit" value="Save" className="bg-[#FAD505] h-12 w-24 rounded-md" />
      </form>
    </div>
  </> 
  )
}

export default CreateAccount