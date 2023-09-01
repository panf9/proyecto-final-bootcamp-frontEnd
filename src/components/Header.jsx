import { IoLocationOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { LiaShippingFastSolid } from "react-icons/lia";
import { BsHeart } from "react-icons/bs"; 
import { TfiShoppingCartFull } from "react-icons/tfi";
import { RxLoop } from "react-icons/rx";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { useContext, useEffect, useState } from "react";
import CategoriesPage from "../pages/CategoriesPage";

import { UserContext } from "../context/UserContext";
import ModalCart from "../utility/ModalCart";

const Header = () => {
  const [categories, setCategories] = useState([])
  const { totalCart, setTotalCart } = useContext(UserContext)
  // const [totalCart, setTotalCart] = useState(0)
  const [productList, setProductList] = useState(JSON.parse(localStorage.getItem('product')) || [])

  const totalItems = () => {
    let cantidad = 0
    productList.forEach(element => {
      // console.log("element qty", element.qty)
      cantidad = cantidad + element.qty
      // console.log("Total Cart", totalCart)
    });
    setTotalCart(cantidad)
  }

  const fetchCatgeries = async () => {
    const url = 'http://localhost:3000/categorias'
    const categories = await fetch(url)
    const data = await categories.json()
    setCategories(data)
  }

  useEffect(() => {
    fetchCatgeries()
    totalItems()
  }, [])

  return (
    <>
      <header className="bg-[#FAD505]">
        <div className="hidden md:block">
          <nav className="flex justify-between w-[1170px] mx-auto py-2">
            <div>
              <span className="font-[300] hidden lg:block ">
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
        </div>
        <hr />
        <div>
          <div className="w-[1170px] mx-auto flex justify-between py-4">
            <Link to='/'><img src="https://prestashop.coderplace.com/PRS02/PRS02045/PRS02/img/logo-1680764769.jpg" alt="logo prinicipal" /></Link>
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
                  <RxLoop className="pt-1 hidden md:block" size='2rem' />
                  <span className="hidden md:block bg-[#303840] text-white rounded-full h-5 w-5 text-center text-sm">0</span>
                </div>
                <div className="flex">
                  <BsHeart  className="pt-1 hidden md:block" size='1.8rem'/>
                  <span className="hidden md:block bg-[#303840] text-white rounded-full h-5 w-5 text-center text-sm">0</span>
                </div>
                <div className="group relaive">
                  <div className="flex">
                    <TfiShoppingCartFull className="pt-1" size='2rem' />
                    <span 
                      className="bg-[#303840] text-white rounded-full h-5 w-5 text-center text-sm"
                    >
                      {totalCart}
                    </span>
                  </div>
                  <div className="hidden absolute group-hover:block w-full h-full top-0 left-0 ">
                    <div className="flex justify-end bg-slate-900/70 relative z-50">
                      <div>

                      </div>
                      <div>
                        <ModalCart />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </header>
      <div className="flex py-3 w-[1170px] mx-auto">
        {/* Menudo deplegable */}
        <div className="flex flex-col gap-1 group absolute">
          <div className="flex items-center">
            <IoMenu />
            <span className="font-[400]">Browse Categories</span>
          </div>
          <div className="hidden relative rounded-md group-hover:block">
            <ul className="w-48">
              <li className="bg-[#FAD505] flex flex-col ">
                {
                  categories.map( category => {
                    return (
                      <Link 
                        to={category.name} 
                        element={<CategoriesPage />} 
                        key={category.id}
                        className="hover:bg-yellow-200 hover:rouded-2 hover:border hover:text-[19px] text-lg pl-4 py-2 text-[#303840]"
                      >
                        {category.name}
                      </Link>
                    )
                  })
                }
              </li>
            </ul>
          </div>
        </div>
        <div className="ml-44 mr-8">
          |
        </div>
        <div className="flex gap-10 font-[400]">
            {
              categories.map( category => {
                return (
                  <Link to={category.name} element={<CategoriesPage />} key={category.id}>
                      {category.name}
                  </Link>
                )
              }
              )
            }
        </div>
      </div>
      <hr />
    </>
  )
}

export default Header