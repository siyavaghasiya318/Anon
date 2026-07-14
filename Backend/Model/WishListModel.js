import mongoose from "mongoose"

export const WishlistSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    productid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "product",
        required: true
    },

    

}, {timestamps:true})

export const Wishlist  = mongoose.model("wishlist", WishlistSchema)