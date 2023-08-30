import { useEffect, useState } from "react"
import Product from "./Product"

const NewProducts = () => {
  const [products, setProducts] = useState([])

  const newProducts = async () => {
    const url = 'http://localhost:3000/productos?_page=1&_limit=8'
    const response = await fetch(url)
    const data = await response.json()
    setProducts(data)
    // console.log(data);
  }

  useEffect(() => {
    newProducts()
  }, [])

  return (
    <div className="w-[1170px] mx-auto mt-8 px-10">
      <Product products={products} cols={4}/>
    </div>
  )
}

export default NewProducts