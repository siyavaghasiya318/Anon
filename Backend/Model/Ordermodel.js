import mongoose from "mongoose"

export const OrderSchema = new mongoose.Schema({
   user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true
   },
   seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "seller",
      required: true
   },
   

   item: [
      {
         productid: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "product",
            required: true
         },

         quentity: {
            type: Number,
            required: true
         },

         size: {
            type: String,
            required: true
         },

         totalPrice: {
            type: Number,
            required: true
         }
      }
   ],

   address: {
      type: mongoose.Schema.Types.Mixed
   },

   paymentMethod: {
      type: String,
      enum: ["cod", "stripe"],
      required: true
   },

   paymentStatus: {
      type: String,
      enum: ["pending", "paid", "failed"],
      default: "pending"
   },

   subtotal: { type: Number, required: true },
   tax: { type: Number, default: 0 },
   total: { type: Number, required: true },


   orderStatus: {
      type: String,
      enum: ["Pending", "Processing", "Shipped", "Delivered", "Cancelled","Return"],
      default: "Pending"
   },

   orderDate: {
      type: Date,
      default: Date.now
   },

   deliveredDate: {
      type: Date
   }

}, { timestamps: true })

const Order = mongoose.model("order", OrderSchema)
export default Order