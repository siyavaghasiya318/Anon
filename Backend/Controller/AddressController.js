import Address from "../Model/AddressModel.js"

export const AddAddress = async(req,res) => {
    try {
        const{name,phoneno,adress,city,state,pincode,landmark,label} = req.body

        if(!name || !phoneno || !adress || !city || !state || !pincode || !landmark || !label){
            return res.state(404).json({
                message: "Please Complete All Address Detail",
                success: false
            })
        }
        
        const address = Address.create({
            name,
            phoneno,
            adress,
            city,
            state,
            pincode,
            landmark,
            label
        })

        res.status(200).json({
            message: "Address Added Successfully",
            success: true,
            address
        })
    } catch (error) {
        console.log("add address error", error);
        return res.status(500).json({
            message: "Intenal Server Error",
            success: false
        })
    }
}

export const AddressData = async(req,res) => {
    try {
    
    } catch (error) {
        console.log("updated address error", error);
        return res.status(500).json({
            message: "Internal Server error",
            success: false
        })
    }
}

export const UpdateAddress = async(req,res) => {
    try {
        const{name,phoneno,adress,city,state,pincode,landmark,label} = req.body
        const userid = req.user.id

        if(!name || !phoneno || !adress || !city || !state || !pincode || !landmark || !label){
            return res.state(404).json({
                message: "Please Complete All Address Detail",
                success: false
            })
        }

        const newaddress = await Address.findByIdAndUpdate(userid,{name,phoneno,adress,city,state,pincode,landmark,label})
        res.status(200).json({
            message: "Address Updated Successfully",
            success: true,
            newaddress
        })

    } catch (error) {
        console.log("updated address error", error);
        return res.status(500).json({
            message: "Internal Server error",
            success: false
        })
        
    }
}

