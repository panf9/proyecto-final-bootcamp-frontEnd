import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const ProductPage = () => {
  const productName = useParams('/products/').productname.replaceAll("-", " ")
  const [product, setProduct] = useState({})
  const [images, setImages] = useState()

  // console.log(product);

  // console.log(productName);
  const productFind = async () => {
    const url = "http://localhost:3000/productos"
    const response = await fetch(url)
    const data = await response.json()
    // console.log(data);

    const currentProduct = data.filter( element => element.name === productName)

    setProduct(currentProduct[0])

    // console.log("current Product", );

    setImages(currentProduct[0].images.type_1)
    // console.log("images", images);
  }

  useEffect(() => {
    productFind()
  }, [])
  // console.log(product);
  return (
    <>
      {/* {JSON.stringify(product.images?.type_1.image_1)} */}
      <div className="flex">
        <div>
          <div>
            </div>
              <ul>
                {
                  // console.log("imagenes ", images)
                  Object.entries(images).forEach(([key, value]) => {
                    console.log(key, value)
                  })
                  // images.map( image => {
                  //   console.log("imagen dentro del =>", image)
                  //   return (
                  //     <li key={product.id}><img src={`${image}`} alt="imagen"/></li>
                  //   )
                  // })
                } 
              </ul>
            <div className="border">
            <img src={`${product.images?.type_1.image_1}`} alt="" />
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
    </>
  )
}

export default ProductPage