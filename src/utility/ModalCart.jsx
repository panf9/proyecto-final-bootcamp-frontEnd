import { AiOutlineClose } from "react-icons/ai";
import { CiTrash } from "react-icons/ci";
import { UserContext } from "../context/UserContext";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Checkout from "../pages/checkout";
import CartPage from "../pages/CartPage";

const ModalCart = ({ showCart, setShowCart}) => {
  const { productList, setProductList } = useContext(UserContext)
  const [subTotal, setSubTotal] = useState(0)

  const handleTotal = () => {
    let total = 0 
    productList.forEach(element => {
      total = total + element.price * element.qty
    });
    setSubTotal(total)
  }

  useEffect(() => {
    handleTotal()
  })

  const handleRemove = (event) => {
    console.log("Eliminando...")
    const id = event.currentTarget.dataset.id
    const products = JSON.parse(localStorage.getItem('product'))
    console.log(products)
    const product_2 = products.filter( product => product.id != String(id))
    localStorage.setItem('product', JSON.stringify(product_2))
    setProductList(product_2)
  }

  return (
    <>
    { showCart && 
      <div className="absolute w-full h-full top-0 left-0">
        <div className="flex justify-end bg-slate-900/70 relative z-50">
          <div className="w-[420px] h-screen border bg-white relative z-50 ">
            <div className="flex justify-between items-center bg-[#FAD505] py-4 px-2">
              <h2>Shipping cart</h2>
              <div
                className="w-5 h-5 rounded hover:bg-slate-500/20 flex items-center justify-center"
                onClick= {() => {setShowCart(false)}}
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="overflow-y-scroll h-[600px] max-h-full">
              {/* {JSON.stringify(productList)} */}
              <ul className="pl-2">
                {productList.map(product => (
                  <li key={product.id} className="text-base py-1 px-1">
                    <div className="flex">
                    <div className=" flex items-center mr-4 w-32 h-32">
                      <img src={`${product.img}`} className="border"/>
                    </div>
                    <div className="py-2">
                      <div>
                        <h2 className="font-semibold text-[#0961B3]">{product.name}</h2> 
                      </div>
                      <div>
                        <p className="font-light text-lg">x{product.qty}</p>  
                        <p className="font-light text-[#A90000] text-2xl">${product.price}</p>
                      </div>
                    </div>
                    <div className="pt-4 pr-2">
                      <CiTrash size="1.4rem"
                        data-id={product.id}
                        onClick={handleRemove}
                      />
                    </div>
                    </div>
                    <div>
                      <hr />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div>
                <hr />
                <div className="my-5 flex justify-between px-5 text-xl font-medium">
                  <span>Subtotal: </span>
                  <span>${subTotal}</span>
                </div>
                <hr />
                <div className="my-2 grid grid-cols-3 px-3 py-5">
                    <button className="bg-[#FAD505] px-7 py-2 rounded text-sm">
                      <Link to='/cart' element={<CartPage />}> View Cart</Link>
                    </button>
                    <div></div>
                    <button className="bg-[#FAD505] px-7 py-2 rounded text-sm">
                      <Link to='/checkout' element={<Checkout />}>CheckOut</Link>
                    </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    }
    </>
  )
}

export default ModalCart
