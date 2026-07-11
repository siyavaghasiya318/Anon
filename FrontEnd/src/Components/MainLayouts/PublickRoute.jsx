import React, { useContext } from 'react'
import { UserContext } from '../../Context/UserContext'
import { Navigate, Outlet } from 'react-router-dom'

const PublickRoute = () => {
    
     const{Profile} = useContext(UserContext)
    
     if(Profile && Profile?.role === "admin"){
        return <Navigate to="/admin" replace />
     }


     if(Profile && Profile?.role === "seller"){
        return <Navigate to="/seller" replace />
     }


     return <Outlet />



}

export default PublickRoute
