import jwt from "jsonwebtoken"

const SellerAuth = (req,res,next) => {
    try {
         const token = req.cookies.token

        

        if(!token){
            return res.status(400).json({
                message: "token not found",
                success: false
            })
        }

        const decode = jwt.verify(token, process.env.JWT_SECERETE)

        if(decode.role !== "seller"){
            return res.status(404).json({
                success: false,
                message: "Not Authorized to Access this Route"
            })
        }
        // console.log("DECODE:", decode)

        req.user = decode

        next();
    } catch (error) {
        console.log("AuthAdmin error", error);
    }
}

export default SellerAuth