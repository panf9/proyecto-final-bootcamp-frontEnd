// import { createContext, useState } from "react"

// export const UserContext = createContext()

// export const UserProvider = ({ children }) => {
//   // const [user, setUser] = useState(JSON.parse(localStorage.setItem('Auth')) || null)

//   // const [shipping, setShipping] = useState([])
//   const [totalCart, setTotalCart] = useState(0)
//   const [productList, setProductList] = useState(JSON.parse(localStorage.getItem('product')) || [])

//   // const addProduct = (product) => {
//   //   const newValue = shipping.find(e => e.id === product.id)
//   //   if (newValue) {
//   //     newValue.qty += product.qty
//   //     shipping.forEach( e => {
//   //       if ( e.id === newValue.id){
//   //         e.qty = newValue.qty
//   //       }
//   //     })
//   //     // console.log("TOTAL ", shipping)
//   //   }else{
//   //     setShipping([ ...shipping, product])
//   //     // console.log("TOTAL NUEVO", shipping);
//   //   }
//   //   setTotalCar(totalCar + product.qty)
//   // // console.log("El total de productos: ", totalCar);s
//   // }

//   const totalItems = () => {
//     // console.log("total items", productList.length);
//     productList.forEach(element => {
//       setTotalCart( totalCart + element.qty)
//     });
//   }

//   const addProduct = (product) => {
//     let find = true;
//     productList.filter(e => {
//       console.log("dentro del filter");
//       if (e.id === product.id){
//         e.qty++
//         find = false
//       }
//     })
//     if (find){
//       setProductList([...productList, product])
//     }
//     localStorage.setItem('product', JSON.stringify(productList))
//   }
//   // Agregar el localStorage dentro del handleClick y fuera para que agrege productos existentes y no existentes.
//   localStorage.setItem('product', JSON.stringify(productList))


//   return (
//     <UserContext.Provider value={{ productList, totalItems, totalCart, addProduct }}>
//       { children }
//     </UserContext.Provider>
//   )
// }


import { createContext, useState } from "react"

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  // const [user, setUser] = useState(JSON.parse(localStorage.setItem('Auth')) || null)

  // const [shipping, setShipping] = useState([])
  const [totalCart, setTotalCart] = useState(0)
  const [productList, setProductList] = useState(JSON.parse(localStorage.getItem('product')) || [])

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
    // console.log("total items", productList.length);
    productList.forEach(element => {
      setTotalCart( totalCart + element.qty)
    });
  }

  const addProduct = (product) => {
    console.log(product)
    
    const productIndex = productList.findIndex(p => p.id === product.id)

    if (productIndex >= 0) {
      const newProducts = productList.map(p => {
        if (p.id === product.id) {
          return {
            ...p,
            qty: product.qty + 1
          }
        }
        return p
      })

      setProductList(newProducts)
    } else {
      setProductList([...productList, product])
      // setTotalCart(totalCart + 1)
    }

    localStorage.setItem('product', JSON.stringify(productList))

    // let find = true;
    // productList.filter(e => {
    //   console.log("dentro del filter");
    //   if (e.id === product.id){
    //     e.qty++
    //     find = false
    //   }
    // })
    // if (find){
    //   setProductList([...productList, product])
    // }
    // localStorage.setItem('product', JSON.stringify(productList))
  }
  // Agregar el localStorage dentro del handleClick y fuera para que agrege productos existentes y no existentes.
  // localStorage.setItem('product', JSON.stringify(productList))


  return (
    <UserContext.Provider value={{ productList, totalItems, totalCart, setTotalCart, addProduct }}>
      { children }
    </UserContext.Provider>
  )
}
