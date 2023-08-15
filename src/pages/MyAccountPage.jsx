import { Link } from "react-router-dom"

const MyAccountPage = () => {
  return (
    <>
    <div className="flex justify-center mx-auto">
      <div className="w-2/12 my-7 mr-5">
        <div className="bg-[url('https://prestashop.coderplace.com/PRS02/PRS02045/PRS02/modules/cp_leftbanner1/views/img/left-banner-1.jpg')] bg-no-repeat h-72 text-white rounded">
          <p className="text-lg text-center pt-8">New Trending</p>
          <h2 className="font-bold text-3xl text-center">Flats Upto 60% Off</h2>
        </div>
        <div className="border rounded mt-7 p-5">
          <h2 className="font-semibold pb-3">Most View Product</h2>
          <hr />
        </div>
      </div>
      <div className="w-7/12">
        <div>
          <h1 className="text-[18px] font-semibold mt-6 mb-1">Log in To Your Account</h1>
          <hr />
        </div>
        <div className="border mt-5">
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
            <span>Forgot your password?</span>
            <input type="submit" name="" value="Sign In" className="bg-[#FAD505] h-12 w-28 rounded-md"/>
            <Link to='registration'>No account? Create one here</Link>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default MyAccountPage