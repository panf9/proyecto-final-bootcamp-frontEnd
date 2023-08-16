import { IoLocationOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { LiaShippingFastSolid } from "react-icons/lia";
import { FaRegHeart } from "react-icons/fa";
import { TfiShoppingCartFull } from "react-icons/tfi";
import { RxLoop } from "react-icons/rx";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

const Header = () => {
  return (
    <>
      <header className="bg-[#FAD505]">
          <nav className="flex justify-between w-[1170px] mx-auto py-2">
            <div>
              <span className="font-[300]">
              Get Up To 50% OFF New Season Styles, Limited Time Only.
              </span>
            </div>
            <div className="flex justify-beteween gap-5 px-2">
              <div className="flex justify-beteween items-center gap-1">
                <IoLocationOutline />
                <Link to="location" className="font-[300]">Store Locator </Link>
              </div>
              <div>
                |
              </div>
              <div className="flex justify-beteween items-center gap-1">
                <LiaShippingFastSolid />
                <Link to='tracking' className="font-[300]"> Track Your Order </Link>
              </div>
              <div>
                |
              </div>
              <div className="flex justify-beteween items-center gap-1">
                <VscAccount />
                <Link to="my-account" className="font-[300]">My Account</Link>
              </div>
            </div>
          </nav>
          <hr />
          <div className="w-[1170px] mx-auto flex justify-between py-4">
            <Link><img src="https://prestashop.coderplace.com/PRS02/PRS02045/PRS02/img/logo-1680764769.jpg" alt="logo prinicipal" /></Link>
            <div>
              <input 
                type="text" 
                placeholder="Search Product Here..."
                className="w-[650px] py-3 px-4 rounded-l-3xl outline-0"
              />
              <button 
                type="submit"
                className=" bg-[#303840] py-3 px-4 rounded-r-3xl text-white"
              >
                Search
              </button>
            </div>
            <div className="flex justify-between item-center gap-4">
              <div className="flex">
                <RxLoop className="pt-1" size='2rem' />
                <span className="bg-[#303840] text-white rounded-full h-5 w-5 text-center text-sm">0</span>
              </div>
              <div className="flex">
                <FaRegHeart  className="pt-1" size='2rem'/>
                <span className="bg-[#303840] text-white rounded-full h-5 w-5 text-center text-sm">0</span>
              </div>
              <div className="flex">
                <TfiShoppingCartFull className="pt-1" size='2rem' />
                <span className="bg-[#303840] text-white rounded-full h-5 w-5 text-center text-sm">0</span>
              </div>
            </div>
          </div>
      </header>
      <div className="flex py-3 w-[1170px] mx-auto">
        {/* Menudo deplegable */}
        <div className="flex items-center gap-1">
          <IoMenu />
          <span className="font-[400]">Browse Categories</span>
        </div>
        <div className="mx-8">
          |
        </div>
        <div>
          <ul className="flex gap-10 font-[400]">
            <li>Categoria 1</li>
            <li>Categoria 2</li>
            <li>Categoria 3</li>
            <li>Categoria 4</li>
            <li>Categoria 5</li>
          </ul>
        </div>
      </div>
      <hr />
    </>
  )
}

export default Header