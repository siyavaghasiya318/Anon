import React, { useContext } from 'react'
import UserNavbar from '../../UserNavbar'
import { Navigate, Outlet } from 'react-router-dom'
import Footer from '../UserComponents/Footer/Footer'
import { UserContext } from '../../Context/UserContext'

const MainLayout = () => {
  const{Profile ,navigate} = useContext(UserContext)

  if(Profile?.role === "admin"){
    return <Navigate to="/admin" replace />
  }

  if (Profile?.role === "seller") {
    return <Navigate to="/seller" replace />;
  }
  
  return (
    <>
      <UserNavbar/>

      <Outlet/>

      <Footer/>
    </>
  )
}

export default MainLayout
