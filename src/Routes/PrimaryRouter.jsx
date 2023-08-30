import { createBrowserRouter } from "react-router-dom";
import AccountLayout from "../Layout/AccountLayout";
import CreateAccount from "../pages/CreateAccount";
import SignIn from "../pages/SignIn";
import PassRecovery from "../pages/PassRecovery";
import Home from "../pages/Home";
import HomeLayout from "../Layout/HomeLayout";
import CategoriesPage from "../pages/CategoriesPage";

export const PrimaryRouter = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/:category',
        element: <CategoriesPage />
      },
      {
        path: '/my-account',
        element: <AccountLayout />,
        children: [
          {
            index: true,
            element: <SignIn />
          },
          {
            path: 'registration',
            element: <CreateAccount />,
          },
          {
            path: 'password-recovery',
            element: <PassRecovery />,
          }
        ]
      },

    ]
  },  
])

