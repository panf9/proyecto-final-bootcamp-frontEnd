import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomeLayout from "../Layout/HomeLayout"
import Home from "../pages/Home"
import CategoriesPage from "../pages/CategoriesPage"
import AccountLayout from "../Layout/AccountLayout"
import SignIn from "../pages/SignIn"
import CartPage from "../pages/CartPage"
import CreateAccount from "../pages/CreateAccount"
import PassRecovery from "../pages/PassRecovery"
import { UserProvider } from "../context/UserContext"
import ProductPage from "../pages/ProductPage"
import TrackingOrder from "../pages/TrackingOrder"
import PrivateRoute from "./PrivateRoute"
import Checkout from "../pages/checkout"
import MyAccountPage from "../pages/MyAccountPage"

const Router = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <HomeLayout >
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/:category' element={<CategoriesPage />}/>
            <Route path='/products/:productname' element={<ProductPage />}/>
            <Route path='/cart' element={<CartPage/>} />
            <Route path="/checkout" element={<Checkout />} />
            
            <Route element={<PrivateRoute/>}>
              <Route path='/tracking' element={<TrackingOrder />}/>
              <Route path="/my-account" element={<MyAccountPage/>}/>
            </Route>
            <Route path="login" element={<AccountLayout />}>
              <Route path="" element={<SignIn />}/>
              <Route path="registration" element={<CreateAccount />} />
              <Route path="password-recovery" element={<PassRecovery />}/>
            </Route>
          </Routes>
        </HomeLayout>
      </BrowserRouter>
    </UserProvider>
  )
}

export default Router