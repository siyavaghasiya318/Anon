import jwt from "jsonwebtoken"

const AuthUser = (req, res, next) => {
    try {
        const token = req.cookies.token



        if (!token) {
            return res.status(400).json({
                success: false
            })
        }

        const decode = jwt.verify(token, process.env.JWT_SECERETE)

        req.user = decode

        next();
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Unauthorized"
        })
    }
}
export default AuthUser