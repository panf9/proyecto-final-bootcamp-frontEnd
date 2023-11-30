import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const MyAccountPage = () => {
  const accessToken = useState(JSON.parse(localStorage.getItem('auth') || null))
  const navigate = useNavigate()

  const handleSignIn = async () => {
    const url = 'http://localhost:3000/users'
    const headers =  {
      'authorization': `bearer ${accessToken.accessToken}` 
    }

    const response = await fetch(url, headers)
    const data = response.json()

    if (data.message === 'jwt expired'){
      navigate('/my-account')
      localStorage.removeItem('auth')
    }
  }

  useEffect(() => {
    handleSignIn()
  }, [])
  return (
    <>
      <div>My Account Page</div>
    </>
  )
}

export default MyAccountPage