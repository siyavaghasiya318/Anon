import express from "express"
import AuthUser from "../MIddleware/UserAuth.js"
import { CreateOrder, GetMyOrders, GetOrderItem, UpdateOrder } from "../Controller/OrderController.js"
import SellerAuth from "../MIddleware/SellerAuth.js"
import AuthAdmin from "../MIddleware/AdminAuth.js"

 const Orderroute = express.Router()

Orderroute.post("/checkout", AuthUser,CreateOrder)
Orderroute.get("/getorder", SellerAuth ,GetOrderItem)
Orderroute.get("/getorder", AuthAdmin  ,GetOrderItem)
Orderroute.get("/myorders", AuthUser, GetMyOrders)
Orderroute.put("/update", SellerAuth , UpdateOrder)


export default Orderroute
