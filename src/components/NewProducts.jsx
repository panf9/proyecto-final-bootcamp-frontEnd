import { useEffect, useState } from "react"
import Product from "./Product"

const NewProducts = () => {
  const [products, setProducts] = useState([])

  const newProducts = async () => {
    const url = 'http://localhost:3000/products'
    const response = await fetch(url)
    const data = await response.json()
    setProducts(data)
    // console.log(data);
  }

  useEffect(() => {
    newProducts()
  }, [])

  return (
    <div className="w-full md:w-[1170px] mx-auto mt-8 px-10">
      <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 relative z-0">
        <Product products={products}/>
      </div>
    </div>
  )
}

export default NewProducts