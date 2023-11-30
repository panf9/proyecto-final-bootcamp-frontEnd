import { FaTrash } from "react-icons/fa";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";

const CartPage = () => {
  const { productList, setProductList } = useContext(UserContext)

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
    <div className="flex gap-8">
      <div>
        <ul className="pl-2">
          {productList.map(product => (
            <li key={product.id} className="text-base py-1 px-1">
              <div className="flex gap-8">
                <div className=" flex items-center mr-4 w-32 h-32">
                  <img src={`${product.img}`} className="border"/>
                </div>
                <div className="py-2">
                  <div>
                    <h2 className="font-normal text-[#0961B3]">{product.name}</h2> 
                  </div>
                  <div> 
                    <p className="font-light text-[#A90000] text-2xl">${product.price}</p>
                  </div>
                </div>
                <div>
                <div className="font-light text-lg">{product.qty}</div> 
                </div>
                <div>
                  <div className="font-normal text-[#A90000] text-2xl">
                    { product.qty * product.price }
                  </div>
                </div>
                <div className="pt-4 pr-2">
                  <FaTrash size="1.4rem"
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
          <span> itmes</span>
          <span> xxxx</span>
        </div>
        <div>
          <span> Shipping</span>
          <span> xxxx</span>
        </div>
        <div>
          <span>Total</span>
          <span>XXXX</span>
        </div>
        <button className="bg-[#FAD505] px-7 py-2 rounded text-sm">CheckOut</button>
      </div>
    </div>
    </>
  )
}

export default CartPage