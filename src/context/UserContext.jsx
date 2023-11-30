import { createContext, useEffect, useState } from "react"

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [user, setUSer] = useState(JSON.parse(localStorage.getItem('auth')) || null)

  const [totalCart, setTotalCart] = useState(0)
  const [productList, setProductList] = useState(JSON.parse(localStorage.getItem('product')) || [])

  const [showCart, setShowCart] = useState(false)

  // const addProduct = (product) => {
  //   const newValue = shipping.find(e => e.id === product.id)
  //   if (newValue) {
  //     newValue.qty += product.qty
  //     shipping.forEach( e => {
  //       if ( e.id === newValue.id){
  //         e.qty = newValue.qty
  //       }
  //     })
  //     // console.log("TOTAL ", shipping)
  //   }else{
  //     setShipping([ ...shipping, product])
  //     // console.log("TOTAL NUEVO", shipping);
  //   }
  //   setTotalCar(totalCar + product.qty)
  // // console.log("El total de productos: ", totalCar);s
  // }

  const totalItems = () => {
    let num = 0
    productList.forEach(element => {
      num += element.qty
    });
    setTotalCart( num )
  }

  const addProduct = (product) => {
    console.log(product)
    setTotalCart(totalCart + product.qty)
    console.log(totalCart)
    const productIndex = productList.findIndex(p => p.id === product.id)

    if (productIndex >= 0) {
      const newProducts = productList.map(p => {
        if (p.id === product.id) {
          return {
            ...p,
            qty: p.qty + 1
          }
        }
        return p
      })

      setProductList(newProducts)
    }else {
      setProductList([...productList, product])
    }
    // console.log("ProducList: ", productList);
    // localStorage.setItem('product', JSON.stringify(productList) )
    
  }
  // Agregar el localStorage dentro del handleClick y fuera para que agrege productos existentes y no existentes.
  localStorage.setItem('product', JSON.stringify(productList))

  useEffect( () => {
    productList
    totalItems()
  }, [])

  const isAuth = Boolean(user?.accessToken)
  
  const storeUser = (dataUser) => {
    localStorage.setItem('auth', JSON.stringify(dataUser))
    setUSer(dataUser)
  }

  const cleanUser = () => {
    localStorage.removeItem('auth')
    setUSer(null)
  }



  return (
    <UserContext.Provider 
    value={{ 
      productList, 
      setProductList, 
      totalCart, 
      setTotalCart, 
      addProduct,
      user,
      storeUser,
      cleanUser,
      isAuth,
      setShowCart,
      showCart
      }}>
      { children }
    </UserContext.Provider>
  )
}
