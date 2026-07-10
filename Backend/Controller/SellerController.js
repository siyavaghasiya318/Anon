import Seller from "../Model/SellereModel.js"
import User from "../Model/UserModel.js"

export const RegisterSeller = async (req, res) => {
    try {
        const { shopname, gstnum, phonenum, address, city, state, pincode } = req.body

        const user = req.user.id



        if (!shopname || !gstnum || !phonenum || !address || !city || !state || !pincode) {
            return res.status(404).json({
                message: "Please Complete All Detail",
                success: false
            })
        }



        const sellerdetail = await Seller.create({
            user,
            shopname,
            gstnum,
            phonenum,
            address,
            city,
            state,
            pincode
        })
        const updatedUser = await User.findByIdAndUpdate(
            user,
            { role: "seller" },
            { new: true }
        );

        res.status(200).json({
            message: "Seller Detail Addded",
            success: true,
            user: updatedUser
        })
        console.log("CREATED SELLER:", sellerdetail,updatedUser)

    } catch (error) {
        console.log("SellerReq error", error);
        return res.status(500).json({
            message: "Internal ServerEroor",
            success: false
        })
    }
}

export const GetSellerDetail = async (req, res) => {
    try {

        const user = await Seller.findOne({ user: req.user.id }).populate({path: "user",select: "-password"})


        if (!user) {
            return res.status(404).json({
                message: "seller not found",
                success: false
            })
        }

        res.status(200).json({
            message: "Seller",
            success: true,
            user
        })

    } catch (error) {
        console.log("GetSellerDetail error", error);
        return res.status(500).json({
            message: "Internal ServerEroor",
            success: false
        })
    }
}

export const GetAllSellers = async (req, res) => {
    try {
        const user = await User.find({ role: "seller" })

        if (!user) {
            res.status(404).json({
                message: "sellers not found",
                success: false
            })
        }

        res.status(200).json({
            message: "succesfully get all sellers",
            success: true,
            user
        })
    } catch (error) {
        console.log("getseller error", error);
        
    }
}