import { useEffect, useState, useContext } from "react"
import { useParams } from "react-router-dom"
import Product from "../components/Product"
import Footer from "../components/Footer"
import { BiChevronUp, BiChevronDown } from "react-icons/bi";
import { UserContext } from "../context/UserContext";


const ProductPage = () => {
  const productName = useParams('/products/').productname.replaceAll("-", " ")
  const [product, setProduct] = useState({})
  const [images, setImages] = useState()
  const [click, setCLick] = useState(false)
  const [img, setImg] = useState()
  const [productsCat, setProductsCat] = useState([])
  const [qty, setQty] = useState(1)
  const [keyImg, setKeyImg] = useState(1)

  const { addProduct, totalItems } = useContext(UserContext)

  const handleAddProduct = (event) => {
    const id = event.currentTarget.dataset.id
    const name = event.currentTarget.dataset.name
    const price = event.currentTarget.dataset.price
    const img = event.currentTarget.dataset.img
    const qtty = parseInt(event.currentTarget.dataset.qty)

    const newObject = {id, name, price, qtty, img}
    console.log("Nuevo productos agregado ",newObject);
    addProduct(newObject)
    totalItems()
  }

  const productFind = async () => {
    const url = "http://localhost:3000/productos"
    const response = await fetch(url)
    const data = await response.json()
    // console.log(data);

    const currentProduct = data.filter( element => element.name === productName)

    setProduct(currentProduct[0])

    setImages(currentProduct[0].images.type_1)

    console.log("Cat actual", currentProduct[0].category);
    const prodCategories = data.filter(element => element.category === currentProduct[0].category && element.id !== currentProduct[0].id)
    setProductsCat(prodCategories)
  }

  const handleCLick = (event) => {
    const img = event.currentTarget.dataset.img
    const key = event.currentTarget.dataset.key
    console.log(img);
    setCLick(true)
    setImg(img)
    setKeyImg(key)
  }

  useEffect(() => {
    productFind()
  }, [])
  // console.log(product);

  return (
    <>
      {/* {JSON.stringify(product.images?.type_1.image_1)} */}
      <div className="flex w-[1170px] mx-auto mt-10">
        <div>
          <div className="flex">
            <div>
              <ul>
                {
                  // console.log("imagenes ", images)
                  images && 
                  Object.entries(images).map( entry => {
                    const [key, value] = entry
                    return (
                    <li key={key} 
                      className={`${keyImg===key ? "outline outline-offset-1 outline-yellow-300": "outline-white-400"} w-20 mr-5 border-0 rounded-sm focus:ring-1`}
                      data-img={value}
                      data-key={key}
                      onClick={handleCLick}
                    > 
                      <img src={`${value}`} alt="" 
                      />
                    </li>
                    )
                  })
                } 
              </ul>
            </div>
            <div className="">
            <img src={  click?img:`${product.images?.type_1.image_1}`} alt="" />
            </div>
          </div>
        </div>
        <div className="ml-14">
          <h1 className="font-medium text-3xl mt-20 text-slate-950/80">{product.name}</h1>
          <div className="flex gap-4 mt-5 mb-2 text-slate-500/70">
            <div className="">
              <span>Brand: </span>
              <span>{product.brand}</span>
            </div>
            <div> | </div>
            <div>
              <span>SKU: </span>
              <span>{product.sku}</span>
            </div>
            <div> | </div>
            <div>
              <span>Condition: </span>
              <span>{product.condition}</span>
            </div>
          </div>
          <hr />
          <div className="mt-5">
            <p>{product.desciption_short}</p>
          </div>
          <div className={`${product.stock>0? "bg-green-300": "bg-red-300"} border rounded px-2 w-24 py-3 text-center`} >
            <span >{product.stock>0? "In Stock": "Agotado"}</span>
          </div>
          <div className="flex items-center">
            <div className="flex">
              <input className="border h-10 w-16 px-2 rounded-s" value={qty} type="number" name="qty" placeholder="1" />
              <div>
                <BiChevronUp 
                  className="text-xl border-e border-t border-b rounded-se hover:bg-slate-100"
                  onClick={() => {setQty(qty + 1)}}
                />
                <BiChevronDown 
                  className="text-xl border-e border-b rounded-ee hover:bg-slate-100"
                  onClick={() => {setQty(qty - 1)}}
                />
              </div>
            </div>
            <div>
              <button 
                className=" bg-[#FAD505] text-black py-3 px-20 rounded-md font-semibold text-sm my-5 ml-10"
                data-id={product.id}
                data-name={product.name}
                data-price={product.price}
                data-qty={qty}
                data-img={product.images?.type_1.image_1}
                onClick={handleAddProduct}
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 w-[1170px] mx-auto">
        <div>
          <h2 className="text-2xl pb-3 w-fit border-b-2 border-[#FAD505]">You might also like</h2>
        </div>
        <hr />
        <div className="flex"> 
        < Product products={productsCat} />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ProductPage