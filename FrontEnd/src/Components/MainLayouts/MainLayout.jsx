import React, { useContext } from 'react'
import UserNavbar from '../../UserNavbar'
import Footer from '../UserComponents/Footer/Footer'
import { Outlet } from 'react-router-dom'


const MainLayout = () => {

  
  return (
    <>
      <UserNavbar/>

         <Outlet/>

      <Footer/>
    </>
  )
}

export default MainLayout
