import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomeLayout from "../Layout/HomeLayout"
import Home from "../pages/Home"
import CategoriesPage from "../pages/CategoriesPage"
import AccountLayout from "../Layout/AccountLayout"
import SignIn from "../pages/SignIn"
import CreateAccount from "../pages/CreateAccount"
import PassRecovery from "../pages/PassRecovery"
import { UserProvider } from "../context/UserContext"

const Router = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <HomeLayout >
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/:category' element={<CategoriesPage />}/>

            <Route path="my-account" element={<AccountLayout />}>
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