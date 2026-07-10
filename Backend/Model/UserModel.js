import mongoose from "mongoose";

const userSchema = await new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        role: ['user', 'admin', 'seller'],
        default: 'user'
    },
    resetOtp: String,
    expireOtp: String
    
},{timestamps:true})

const User = mongoose.model("user",userSchema )
export default User