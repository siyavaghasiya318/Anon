import express from "express"
import { AddressDelete, GetUserAddress, UserAdressForm } from "../Controller/UserAddressController.js"
import AuthUser from "../MIddleware/UserAuth.js"

const UserAddress = express.Router()

UserAddress.post("/address",AuthUser, UserAdressForm)
UserAddress.get("/getaddress",AuthUser, GetUserAddress)
UserAddress.delete("/delete",AuthUser, AddressDelete)
export default UserAddress