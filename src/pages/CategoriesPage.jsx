import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Product from "../components/Product";

const CategoriesPage = () => {
  const [products, setProducts] = useState([])
  const { category } = useParams('/')

  const fetchProducts = async () => {
    const url = 'http://localhost:3000/productos'
    const response = await fetch (url)
    const data = await response.json()
    const newData = data.filter( dat => dat.category === category)
    setProducts(newData)
    console.log("new data => ",newData);
  }

  useEffect(() => {
    fetchProducts()
  }, [category])
  console.log("Categoria ", category);
  return (
      <div className="flex justify-center mx-auto w-full md:w-[1170px]">
        <div className="w-[214px] mt-24 mr-5">
          <div className="bg-[url('https://prestashop.coderplace.com/PRS02/PRS02045/PRS02/modules/cp_leftbanner1/views/img/left-banner-1.jpg')] bg-no-repeat h-72 text-white rounded">
            <p className="text-lg text-center pt-8">New Trending</p>
            <h2 className="font-bold text-3xl text-center">Flats Upto 60% Off</h2>
          </div>
          <div className="border rounded mt-7 p-5">
            <h2 className="font-semibold pb-3">Most View Product</h2>
            <hr />
          </div>
        </div>
        <div className="w-[936px]">
          <div className="mt-10">
            <h2 className="font-[600px] text-2xl pl-10 mb-2">{category.toUpperCase()}</h2>
            <hr className="mb-2"/>
          </div>
          <Product 
          products={products}
        />
      </div>
    </div>
  )
}

export default CategoriesPage

