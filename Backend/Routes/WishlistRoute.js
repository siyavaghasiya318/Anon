import express from "express"
import { AddWishlist, getwishlist } from "../Controller/WishlistController.js"
import AuthUser from "../MIddleware/UserAuth.js"

const WishlistRouter = express.Router()

WishlistRouter.post("/wishlistitem/:productId", AuthUser, AddWishlist)
WishlistRouter.get("/getwishlist", AuthUser, getwishlist )

export default WishlistRouter