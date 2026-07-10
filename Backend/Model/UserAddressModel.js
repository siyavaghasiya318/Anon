import mongoose, { model } from "mongoose";

export const UserAddressSchems = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },

    name: {
        type: String,
        required: true
    },
    phoneno: {
        type: Number,
        required: true
    },
    streetaddress: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    pincode: {
        type: Number,
        required: true
    },
    landmark: {
        type: String,
        required: true
    },
    lable: {
        type: String,
        enum: ["home", "office", "other"],
        default: "home"
    },
    isDefault: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

const UserAddress = mongoose.model("useradree", UserAddressSchems)
export default UserAddress