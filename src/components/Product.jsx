import { CiHeart } from "react-icons/ci";
import { IoIosExpand } from "react-icons/io";

import { UserContext } from "../context/UserContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import ProductPage from "../pages/ProductPage";

const Product = ({ products }) => {
  const { addProduct, totalItems } = useContext(UserContext)

  const handleCLick = (event) => {
    const id = event.currentTarget.dataset.id
    const name = event.currentTarget.dataset.name
    const price = event.currentTarget.dataset.price
    const img = event.currentTarget.dataset.img
    const qty = 1

    const newObject = {id, name, price, qty, img}

    addProduct(newObject)
    totalItems()
  }

  return (
    <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 relative z-0">
      {products.map(product => {
          return (
            <div key={product.id} className="w-[234px] border group relative" >
              <Link to={`/products/${product.name.replaceAll(" ", "-")}`} element={<ProductPage />}>
                <div className="flex h-[250px]">
                  <img src={`${product.images.type_1.image_1}`} alt="" />
                  <div className="w-72 absolute flex justify-between">
                    <div>
                      <div className={`${product.price<=product.price_desc? 'hidden':'display'}`}>
                        <div className={ `bg-orange-400 text-white rounded-lg text-sm px-2 py-0.5 mt-5 ml-2`}>
                          {(product.price-product.price_desc)/product.price* 100}%
                        </div>
                      </div>
                      <div 
                        className="bg-gray-200 rounded-lg px-2 py-0.5 mt-3 ml-2 text-center text-[14px] font-light">
                        {product.condition}
                      </div>
                    </div>
                    <div className="flex flex-col mt-8 mr-4 transition-opacity duration-500 ease-linear opacity-0 group-hover:opacity-100 ">
                      <IoIosExpand className="mb-5  bg-gray-200 p-1 rounded-full cursor-pointer" size="2.1rem"/>
                      <CiHeart className="mb-5 bg-gray-200 p-1 rounded-full cursor-pointer" size="2.1rem"/>
                    </div>
                  </div>
                </div>
                <p className="text-gray-400 py-3 pl-2">{product.brand}</p>
                <h2 className="pb-2 text-[#0961B3] font-semibold pl-3 pr-2">{product.name}</h2>
                <p><span className="text-red-700 text-2xl px-3">{product.symbol}{product.price_desc}</span> 
                <span className={`text-gray-400 line-through ${product.price<=product.price_desc? 'hidden':'display'}`}> {product.symbol}{product.price}</span></p>
                <div>
                </div>
              </Link>
              <div className="text-center">
                <button 
                  className="text-white group-hover:bg-[#FAD505] group-hover:text-black py-2 px-6 rounded-md font-semibold text-sm my-3"
                  onClick={handleCLick}
                  data-id={product.id}
                  data-name={product.name}
                  data-price={product.price}
                  data-img={product.images.type_1.image_1}
                  >
                  Add To Card
                </button>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Product