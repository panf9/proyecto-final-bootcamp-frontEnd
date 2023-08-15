
import { IoLocationOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { LiaShippingFastSolid } from "react-icons/lia";
import { FaRegHeart } from "react-icons/fa";
import { TfiShoppingCartFull } from "react-icons/tfi";
import { RxLoop } from "react-icons/rx";


function App() {

  return (
    <>
      <header className="bg-[#FAD505]">
          <nav className="flex justify-between w-[1170px] mx-auto py-2">
            <div>
              <span>
              Get Up To 50% OFF New Season Styles, Limited Time Only.
              </span>
            </div>
            <div className="flex justify-beteween gap-5 px-2">
              <div className="flex justify-beteween items-center gap-1">
                <IoLocationOutline />
                <span>Store Locator </span>
              </div>
              <div>
                |
              </div>
              <div className="flex justify-beteween items-center gap-1">
                <LiaShippingFastSolid />
                <span> Track Your Order </span>
              </div>
              <div>
                |
              </div>
              <div className="flex justify-beteween items-center gap-1">
                <VscAccount />
                <span>My Account</span>
              </div>
            </div>
          </nav>
          <hr />
          <div className="w-[1170px] mx-auto flex justify-between py-4">
            <img src="https://prestashop.coderplace.com/PRS02/PRS02045/PRS02/img/logo-1680764769.jpg" alt="logo prinicipal" />
            <div>
              <input 
                type="text" 
                placeholder="Search Product Here..."
                className="w-[650px] py-3 px-4 rounded-l-3xl"
              />
              <button 
                type="submit"
                className=" bg-[#303840] py-3 px-4 rounded-r-3xl text-white"
              >
                Search
              </button>
            </div>
            <div className="flex justify-between item-center gap-3">
              <RxLoop />
              <FaRegHeart />
              <TfiShoppingCartFull />
            </div>
          </div>
      </header>
    </>
  )
}

export default App
