import express from "express"
import { GetAllSellers, GetSellerDetail, RegisterSeller } from "../Controller/SellerController.js"
import AuthUser from "../MIddleware/UserAuth.js"
import SellerAuth from "../MIddleware/SellerAuth.js"
import AuthAdmin from "../MIddleware/AdminAuth.js"

export const SellerRoute = express.Router()

SellerRoute.post("/registerseller",AuthUser, RegisterSeller)
SellerRoute.get("/getseller",SellerAuth, GetSellerDetail)
SellerRoute.get("/allsellers",SellerAuth, GetAllSellers)