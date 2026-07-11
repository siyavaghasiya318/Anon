import dotenv from 'dotenv'
import cookieParser from "cookie-parser"
import express from "express"
import cors from "cors"
import  DbConnection  from "./Config/DbConnect.js"
import UserRoute from "./Routes/UserRoute.js"
import { AddAddress } from "./Controller/AddressController.js"
import AddressRoute from "./Routes/AddressRoute.js"
import { SellerRoute } from "./Routes/SellereRoute.js"
import ProductRoute from "./Routes/ProductRoute.js"
import UserAddress from "./Routes/UserAddressRoute.js"
import CartRoute from "./Routes/CartRoute.js"
import Orderroute from "./Routes/OrderRoute.js"

dotenv.config()

const app = express()

const port = process.env.PORT 


app.use(express.json())
app.use(cookieParser())

const corsOrigin = [
    "http://localhost:5174",
    "http://localhost:5173",
    "https://anon-alpha-blond.vercel.app"
]

app.use(cors({
    origin: corsOrigin,
    credentials:true
}))


app.use("/api/user", UserRoute)
app.use("/api/address", AddressRoute)
app.use("/api/seller", SellerRoute)
app.use("/api/product", ProductRoute)
app.use("/api/cart", CartRoute) 
app.use("/api/useraddress",UserAddress)
app.use("/api/order",Orderroute)

app.get("/", (req,res) => {
    res.send("Successfully running")
} )

app.listen(port, () => {
    console.log("Successfully run on", port);
    DbConnection()
    
})