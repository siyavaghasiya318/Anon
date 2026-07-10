import express from "express"
import AuthUser from "../MIddleware/UserAuth.js"
import { Addcart, DecreaseQuentity, GetCartProduct } from "../Controller/CartController.js"

const CartRoute = express.Router()

CartRoute.post("/addcart", AuthUser , Addcart)
CartRoute.get("/getcart", AuthUser, GetCartProduct)
CartRoute.post("/decrease", AuthUser, DecreaseQuentity)
export default CartRoute