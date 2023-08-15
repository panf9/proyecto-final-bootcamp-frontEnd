
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MyAccountPage from "./pages/MyAccountPage";
import Home from "./pages/Home";


function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="my-account" element={<MyAccountPage />} />
      </Routes>
    </>
  )
}

export default App
