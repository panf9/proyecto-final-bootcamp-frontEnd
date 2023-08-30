import { AiOutlineClose } from "react-icons/ai";

const ModalCart = () => {

  return (
    <div className="w-96 border bg-white">
      <div className="flex justify-between items-center bg-[#FAD505] py-4 px-2">
        <h2>Shipping cart</h2>
        <AiOutlineClose />
      </div>
      <div className="h-full">
        
      </div>
      <hr />
      <div className="mt-2 flex justify-between px-4 py-2 bottom-0">
        <button className="bg-[#FAD505] px-7 py-2 rounded text-sm">View Cart</button>
        <button className="bg-[#FAD505] px-7 py-2 rounded text-sm">CheckOut</button>
      </div>
    </div>
  )
}

export default ModalCart