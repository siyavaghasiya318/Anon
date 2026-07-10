import jwt from "jsonwebtoken"

const AuthAdmin = (req,res,next) => {
    try {
         const token = req.cookies.token

        

        if(!token){
            return res.status(400).json({
                message: "token not found",
                success: false
            })
        }

        const decode = jwt.verify(token, process.env.JWT_SECERETE)

        if(decode.role !== "admin"){
            return res.status(404).json({
                success: false,
                message: "Not Authorized to Access this Route"
            })
        }

        req.user = decode

        next();
    } catch (error) {
        console.log("AuthAdmin error", error);
    }
}

export default AuthAdmin