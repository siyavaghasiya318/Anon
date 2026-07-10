import jwt from "jsonwebtoken"

export const GenerateToken = (res,id, role)=>{
    try {
        const token = jwt.sign({id, role}, process.env.JWT_SECERETE, {expiresIn:"3d"})

        res.cookie("token",token,{
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            sameSite: "lax",
            maxAge: 3*24*60*60*1000
        }) 
        
        return token
    } catch (error) {
        console.log("token error", error);
        
    }
}
    
