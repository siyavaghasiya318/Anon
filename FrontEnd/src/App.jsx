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
import PublickRoute from './Components/MainLayouts/PublickRoute'
import Wishlist from './Components/UserComponents/AllCategories/Wishlist'

function App() {



  return (
    <>
      <Routes>


          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="category/:category/:gender" element={<Category />} />
            <Route path="/category" element={<Category />} />
            <Route path="category/:category/:gender/:subcategory" element={<Allproducts />} />
            <Route path="productdetail/:id" element={<ProductDetail />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="profile" element={<UserProfile />} />
            <Route path="cart" element={<CartProduct />} />
            <Route path="checkout" element={<Checkoutpage />} />
          </Route>

          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="user" element={<Users />} />
            <Route path="orders" element={<Orders />} />
            <Route path="sellers" element={<Seller />} />
            <Route path="products" element={<Inventory />} />
          </Route>

          <Route path="/seller" element={<SellerLayout />}>
            <Route index element={<SellerDashboard />} />
            <Route path="products" element={<SellerProducts />} />
            <Route path="products/add" element={<AddProducts />} />
            <Route path="profile" element={<SellerProfile />} />
            <Route path="order" element={<CustomerOrders />} />
          </Route>


      </Routes>

      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={10}
        toastOptions={{
          duration: 3000,
          style: {
            background: "#ffffff",
            color: "#1a1a1a",
            padding: "12px 20px",
            borderRadius: "10px",
            fontSize: "14px",
            fontWeight: 600,
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            borderLeft: "4px solid #ff8f9c",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          },
          success: {
            duration: 2500,
            iconTheme: {
              primary: "#ff8f9c",
              secondary: "#ffffff",
            },
            style: {
              background: "#ffffff",
              borderLeft: "4px solid #ff8f9c",
            },
          },
          error: {
            duration: 3000,
            iconTheme: {
              primary: "#ff5b5b",
              secondary: "#ffffff",
            },
            style: {
              background: "#ffffff",
              borderLeft: "4px solid #ff5b5b",
            },
          },
          loading: {
            iconTheme: {
              primary: "#ff8f9c",
              secondary: "#ffffff",
            },
            style: {
              background: "#ffffff",
              borderLeft: "4px solid #ff8f9c",
            },
          },
        }}
      />
    </>
  )
}

export default App