import mongoose from "mongoose";

export const AddressSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    phoneno:{
        type: Number,
        required: true
    },
    adress:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    state:{
        type: String,
        required: true
    },
    pincode:{
        type: String,
        required: true
    },
    landmark:{
        type: String,
        required: true
    },
    label:{
        type: String,
        required: true
    },
}, {timestamps:true})

const Address = mongoose.model("address", AddressSchema)
export default Address