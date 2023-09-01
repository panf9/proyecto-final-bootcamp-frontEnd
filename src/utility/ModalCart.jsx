// import { AiOutlineClose } from "react-icons/ai";

// const ModalCart = () => {

//   return (
//     <div className="w-96 border bg-white">
//       <div className="flex justify-between items-center bg-[#FAD505] py-4 px-2">
//         <h2>Shipping cart</h2>
//         <AiOutlineClose />
//       </div>
//       <div className="h-full">
        
//       </div>
//       <hr />
//       <div className="mt-2 flex justify-between px-4 py-2 bottom-0">
//         <button className="bg-[#FAD505] px-7 py-2 rounded text-sm">View Cart</button>
//         <button className="bg-[#FAD505] px-7 py-2 rounded text-sm">CheckOut</button>
//       </div>
//     </div>
//   )
// }

// export default ModalCart

import { AiOutlineClose } from "react-icons/ai";
import { CiTrash } from "react-icons/ci";

import { UserContext } from "../context/UserContext";
import { useContext, useEffect, useState } from "react";

const ModalCart = () => {
  const { productList } = useContext(UserContext)

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

  return (
    <div className="w-[420px] h-screen border bg-white relative z-50 ">
      <div className="flex justify-between items-center bg-[#FAD505] py-4 px-2">
        <h2>Shipping cart</h2>
        <AiOutlineClose />
      </div>
      <div className="">
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
                <CiTrash size="1.4rem"/>
              </div>
              </div>
              <div>
                <hr />
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="absolute bottom-0">
        <div>
          <hr />
          <div className="my-4 flex justify-between px-5 text-xl font-medium">
            <span>Subtotal: </span>
            <span>${subTotal}</span>
          </div>
          <hr />
          <div className="my-2 grid grid-cols-3 px-3 py-5">
              <button className="bg-[#FAD505] px-7 py-2 rounded text-sm">View Cart</button>
              <div></div>
              <button className="bg-[#FAD505] px-7 py-2 rounded text-sm">CheckOut</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalCart
