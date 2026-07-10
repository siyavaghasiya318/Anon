import UserAddress from "../Model/UserAddressModel.js";

export const UserAdressForm = async(req,res) => {
    try {
        const{name,phoneno,streetaddress,city,state,pincode,landmark,lable,isDefault} = req.body
        const userid = req.user.id
        if(!name || !phoneno|| !streetaddress|| !city|| !state|| !pincode|| !landmark|| !lable|| !isDefault) {
            return res.status(404).json({
                message: "Please complete all adress detail ",
                success:false
            })
        }

        const useraddress = await UserAddress.create({
            user:userid,
            name,
            phoneno,
            streetaddress,
            city,
            state,
            pincode,
            landmark,
            lable,
            isDefault
        })

        res.status(200).json({
            message: "Address saved successfully",
            success:true
        })
    } catch (error) {
        console.log("UserAddressForm error", error);
        return res.status(500).json({
            message: "Internal ServerEroor",
            success: false
        })
    }
}

export const GetUserAddress = async(req,res) => {
    try {
        const userid = req.user.id
        
        const address = await UserAddress.find({user:userid})
        
        res.status(200).json({
            message: "fetch address",
            success:true,
            address
        })
    } catch (error) {
        console.log("GetUserAddress error", error);
        return res.status(500).json({
            message: "Internal ServerEroor",
            success: false
        })
    }
}

export const AddressDelete = async(req,res) => {
    try {
        const{addressid} = req.body
        const userid = req.user.id

        const address = await UserAddress.findOneAndDelete({_id:addressid,user:userid})
        
        if(!address){
            return res.status(404).json({
                message: "Address not found",
                success:false
            })
        }
        
        res.status(200).json({
            message: "Address deleted",
            success:true
        })
    } catch (error) {
        console.log("AddressDelte error", error);
        return res.status(500).json({
            message: "Internal ServerEroor",
            success: false
        })
    }
}