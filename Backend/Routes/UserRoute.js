import express from "express"
import { DeleteUser, forgorPassword, GetProfile, GetSellers, GetUsers, NewPassword, Register, resetPassword, UpdateUser, UserLogin, UserLogout, verifyOtp } from "../Controller/UserController.js"
import AuthUser from "../MIddleware/UserAuth.js"
import AuthAdmin from "../MIddleware/AdminAuth.js"
import AuthSeller from "../MIddleware/SellerAuth.js"

const UserRoute = express.Router()

UserRoute.post("/register", Register)
UserRoute.post("/login", UserLogin)
UserRoute.put("/changepassword",AuthUser, NewPassword)
UserRoute.post("/email", forgorPassword)
UserRoute.post("/otp", verifyOtp)
UserRoute.post("/resetpassword", resetPassword)
UserRoute.get("/getprofile",AuthUser, GetProfile)
UserRoute.post("/logout",AuthUser, UserLogout)
UserRoute.put("/updateuser",AuthUser, UpdateUser)

// Admin
UserRoute.get("/getusers", AuthAdmin, GetUsers)
UserRoute.get("/getsellers", AuthAdmin, GetSellers)
UserRoute.delete("/deleteuser", AuthAdmin, DeleteUser)

export default UserRoute