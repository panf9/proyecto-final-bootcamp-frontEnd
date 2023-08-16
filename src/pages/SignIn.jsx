import { Link } from "react-router-dom"

const SignIn = () => {
  return (
    <form action="" className="flex flex-col gap-5 my-10 items-center">
      <div className="flex flex-col items-end gap-5">
        <div>
          <label>Email</label>
          <input type="email" name="" required className="w-96 ml-3 border rounded-md h-12 pl-3 outline-0"/>
        </div>
        <div>
          <label>password</label>
          <input type="password" name="" required className="w-80 ml-3 border rounded-l-md h-12 pl-3 outline-0" />
          <button type="button" className="bg-[#FAD505] h-12 w-16 rounded-r-md">Show</button>
        </div>
      </div>
      <Link to='password-recovery' className="hover:text-[#0961B3]">Forgot your password?</Link>
      <input type="submit" name="" value="Sign In" className="bg-[#FAD505] h-12 w-28 rounded-md"/>
      <Link to='registration' className="hover:text-[#0961B3]">No account? Create one here</Link>
    </form>
  )
}

export default SignIn