import mongoose from "mongoose";

export const CartSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },

    item: {
        type: [
            {
                productid: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "product",
                    required: true
                },
                quentity: {
                    type: Number,
                    default: 0
                },  
                size:{
                    type:String,
                    required:true
                },
                totalPrice: {
                    type: Number,
                    required: true
                }
            },
        ]
    },
        subtotal: {type:Number,
            default:0
        },
        total: { type: Number }
    
})

export const Cart = mongoose.model("cartItem", CartSchema)