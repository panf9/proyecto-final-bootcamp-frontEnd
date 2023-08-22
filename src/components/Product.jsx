import { CiHeart } from "react-icons/ci";
import { IoIosExpand } from "react-icons/io";

const Product = ({ products }) => {
  console.log("Desde el props ", products);
  return (
    <div className="flex">
      {products.map(product => {
          return (
            <div key={product.id} className="w-[234px] border group relative" >
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
              <div className="text-center">
                <button 
                  className="text-white group-hover:bg-[#FAD505] group-hover:text-black py-2 px-6 rounded-md font-semibold text-sm my-3"
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