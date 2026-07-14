import mongoose from "mongoose"

export const WishlistSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "user",
        required:true
    },
    
})