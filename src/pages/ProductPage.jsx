import { useEffect, useState } from "react"
import { CiLineHeight } from "react-icons/ci"
import { Link, useParams } from "react-router-dom"

const ProductPage = () => {
  const productName = useParams('/products/').productname.replaceAll("-", " ")
  const [product, setProduct] = useState({})
  const [images, setImages] = useState()
  const [click, setCLick] = useState(false)
  const [img, setImg] = useState()
  const [productsCat, setProductsCat] = useState([])

  // console.log(product);

  // console.log(productName);
  const productFind = async () => {
    const url = "http://localhost:3000/productos"
    const response = await fetch(url)
    const data = await response.json()
    // console.log(data);

    const currentProduct = data.filter( element => element.name === productName)

    setProduct(currentProduct[0])

    setImages(currentProduct[0].images.type_1)

    console.log("Cat actual", currentProduct[0].category);
    const prodCategories = data.filter(element => element.category === currentProduct[0].category)
    setProductsCat(prodCategories)
  }

  const handleCLick = (event) => {
    const img = event.currentTarget.dataset.img
    console.log(img);
    setCLick(true)
    setImg(img)
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
                      className="w-20 mr-5 hover:rounded-sm hover:border hover:border-yellow-400 focus:ring-1"
                      data-img={value}
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
          <div className="border rounded px-2 w-24 py-3 text-center">
            <span>{product.stock>0? "In Stock": "Agotado"}</span>
          </div>
          <div>
            <input className="border h-10 w-16" type="number" name="qty" placeholder="1" />
            <button className=" bg-[#FAD505] text-black py-3 px-20 rounded-md font-semibold text-sm my-5 ml-10">Add To Cart</button>
          </div>
        </div>
      </div>
      <div className="flex mt-10">
        {
        // JSON.stringify(productsCat) 
        productsCat.map(product => {
          return (
            <div key={product.id} className="border">
              <div>
                <img  src={`${product.images.type_1.image_1}`} />
              </div>
              <div>
                {product.brand}
              </div>
              <div>
                {product.name}
              </div>
              <div>
                <span>{product.price_desc}</span>
                <span>{product.price}</span>
              </div>
            </div>
          )
        })
        }
      </div>
    </>
  )
}

export default ProductPage