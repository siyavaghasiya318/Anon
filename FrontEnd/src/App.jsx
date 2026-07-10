import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Userpages/Home'
import UserNavbar from './UserNavbar'
import Footer from './Components/UserComponents/Footer/Footer'
import UserLogin from './Components/UserComponents/LogIn/UserLogin'
import Categories from './Components/UserComponents/Categories'
import Category from './Pages/Userpages/Category'
import ProductDetail from './Components/UserComponents/AllCategories/ProductDetail'
import UserProducts from './Components/UserComponents/AllCategories/UserProducts'
import { Toaster } from "react-hot-toast"
import Dashboard from './Pages/AdminPages/Dashboard'
import { UserContext } from './Context/UserContext'
import UserProfile from './Components/UserComponents/Profile/UserProfile'
import Users from './Pages/AdminPages/Users'
import Orders from './Pages/AdminPages/Orders'
import Seller from './Pages/AdminPages/Seller'
import Inventory from './Pages/AdminPages/Inventory'
import MainLayout from './Components/MainLayouts/MainLayout'
import AdminLayout from './Components/MainLayouts/AdminLayout'
import SideBar from './Components/AdminComponents/SideBar'
import SellerLayout from './Components/MainLayouts/SellerLayout'
import SellerDashboard from './Pages/SellerPage/SellerDashboard'
import SellerProducts from './Components/SellerComponents/SellerProducts'
import AddProducts from './Components/SellerComponents/AddProducts'
import SellerProfile from './Components/SellerComponents/SellerProfile'
import CustomerOrders from './Components/SellerComponents/CustomerOrders'
import Allproducts from './Components/UserComponents/AllCategories/Allproducts'
import CartProduct from './Components/UserComponents/AllCategories/CartProduct'
import Checkoutpage from './Pages/Userpages/Checkoutpage'

function App() {

  return (
    <>
      <Routes>

        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/category/:category/:gender" element={<Category />} />
          {/* <Route path="/category/:category" element={<Category />} /> */}
          <Route path="/category/:category/:gender/:subcategory" element={<Allproducts />} />
          <Route path="/productdetail/:id" element={<ProductDetail />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/cart" element={<CartProduct />} />
          <Route path="/checkout" element={<Checkoutpage />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="user" element={<Users />} />
          <Route path="orders" element={<Orders />} />
          <Route path="sellers" element={<Seller />} />
          <Route path="products" element={<Inventory />} />
        </Route>

        <Route path="/seller" element={<SellerLayout/>}>
          <Route index element={<SellerDashboard />} />
          <Route path="products" element={<SellerProducts/>}/>
          <Route path="products/add" element={<AddProducts/>}/>
          <Route path="profile" element={<SellerProfile/>}/>
          <Route path="order" element={<CustomerOrders/>}/>
        </Route>
        

      </Routes>

      <Toaster />
    </>
  )
}

export default App