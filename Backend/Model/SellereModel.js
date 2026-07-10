import mongoose from "mongoose";

const sellerSchema = await new mongoose.Schema({
    user: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },

    shopname:{type:String,required:true},
    gstnum:{type:Number,required:true},
    phonenum:{type:Number,required:true},
    address:{type:String,required:true},
    city:{type:String,required:true},
    state:{type:String,required:true},
    pincode:{type:Number,required:true},
}, {timestamps:true})

const Seller = mongoose.model("seller", sellerSchema)
export default Seller           