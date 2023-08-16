import { FaAngleLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

const PassRecovery = () => {
  return (
    <>
    <div>
        <h1 className="text-[18px] font-semibold mt-6 mb-1">Forgot Your Password?</h1>
        <hr />
    </div>
    <div className="flex flex-col items-center py-12 p-8  border mt-5">
      <p>Please enter the email address you used to register. You will receive a temporary link to reset your password.</p>
      <form className="flex gap-5 my-3 items-center">
        <label>Email address</label>
        <input type="email" name="" required className="w-96 ml-3 border rounded-md h-12 pl-3 outline-0"/>
        <input type="submit" value="Send Reset Link" className="bg-[#FAD505] h-12 w-40 rounded-md" />
      </form>
    </div>
    <Link to='/my-account' className=" flex items-center gap-1 mt-2">
      <FaAngleLeft />
      <span >Back to login</span>
    </Link>
  </> 
  )
}

export default PassRecovery