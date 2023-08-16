import { Link } from "react-router-dom"


const CreateAccount = () => {
  return (
    <>
    <div>
        <h1 className="text-[18px] font-semibold mt-6 mb-1">Create An Account</h1>
        <hr />
    </div>
    <div className="flex flex-col items-center py-12 p-8  border mt-5">
      <p>Already have an account? <Link to='/my-account' className="underline">Log in instead!</Link></p>
      <form className="flex flex-col gap-5 my-3 items-end">
        <div>
          <label>First name</label>
          <input type="text" name="" required className="w-96 ml-3 border rounded-md h-12 pl-3 outline-0"/>
        </div>
        <div>
          <label>Last name</label>
          <input type="text" name="" required className="w-96 ml-3 border rounded-md h-12 pl-3 outline-0"/>
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="" required className="w-96 ml-3 border rounded-md h-12 pl-3 outline-0"/>
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="" required className="w-96 ml-3 border rounded-md h-12 pl-3 outline-0"/>
        </div>
        <div>
          <label>Birthdate</label>
          <input type="date" name="" className="w-96 ml-3 border rounded-md h-12 pl-3 outline-0"/>
        </div>
        
        <input type="submit" value="Save" className="bg-[#FAD505] h-12 w-24 rounded-md" />
      </form>
    </div>
  </> 
  )
}

export default CreateAccount