import { Outlet } from "react-router-dom"


const AccountLayout = () => {
  return (
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
            <Outlet />          
          </div>
        {/* </div> */}
      </div>
    </div>
  )
}

export default AccountLayout