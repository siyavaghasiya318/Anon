import express from "express"
import { AddAddress, UpdateAddress } from "../Controller/AddressController.js"
import AuthUser from "../MIddleware/UserAuth.js"
const AddressRoute = express.Router()

AddressRoute.post("/addaddress",AuthUser, AddAddress)
AddressRoute.put("/updateaddress",AuthUser, UpdateAddress)

export default AddressRoute