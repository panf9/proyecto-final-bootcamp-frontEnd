// import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

const HomeLayout = (props) => {
  return (
    <>
      <Header />
      {props.children}
    </>
  )
}

export default HomeLayout