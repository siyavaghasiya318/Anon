import User from "../Model/UserModel.js";
import bcrypt from "bcryptjs"
import { GenerateToken } from "../Token/UserToken.js";
import transporter from "../Config/EmailService.js";

export const Register = async (req, res) => {
    try {
        const { name, email, password } = req.body

        if (!name || !email || !password) {
            return res.status(404).json({
                message: "All Feild Required",
                success: false
            })
        }

        const Existemail = await User.findOne({ email })
        if (Existemail) {
            return res.status(404).json({
                message: "User Already Exist",
                success: true
            })
        }

        const Hashpassword = await bcrypt.hash(password, 10)

        const user = await User.create({
            name,
            email,
            password: Hashpassword,
        })

        GenerateToken(res, user._id, user.role)



        return res.status(200).json({
            message: "Succefully Create your Account",
            success: true
        })
    } catch (error) {
        console.log("Register error", error);
        return res.status(500).json({
            message: "Inetrnal Error",
            success: false
        })
    }
}


export const UserLogin = async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            return res.status(404).json({
                message: "All Feild Rquired",
                success: false
            })
        }

        const Existemail = await User.findOne({ email })

        if (!Existemail) {
            return res.status(404).json({
                message: "User Not Found",
                success: false
            })
        }

        const Comparepass = await bcrypt.compare(password, Existemail.password)

        if (!Comparepass) {
            return res.status(404).json({
                message: "Password is incorrect",
                success: false
            })
        }

        GenerateToken(res, Existemail._id, Existemail.role)

        return res.status(200).json({
            message: "Successfully login",
            success: true
        })

    } catch (error) {
        console.log("login error", error);
        return res.status(500).json({
            message: "Inetrnal Server error",
            success: false
        })
    }
}

export const NewPassword = async (req, res) => {
    try {
        const { currentpassword, newpassword } = req.body
        console.log(currentpassword, newpassword);
        const userid = req.user.id
        
        
        if (!currentpassword || !newpassword) {
            return res.status(400).json({
                message: "All fill required",
                success: false
            })
        }

        const user = await User.findById(userid);

        if (!user) {
            return res.status(404).json({
                message: "User not found",
                success: false
            });
        }

        const comparepass = await bcrypt.compare(
            currentpassword,
            user.password
        );

        if (!comparepass) {
            return res.status(400).json({
                message: "Your Current Password is Incorrect",
                success: false
            });
        }

        const hashPassword = await bcrypt.hash(newpassword, 10);


        user.password = hashPassword;

        await user.save();


        return res.status(200).json({
            message: "Password Updated Successfully",
            success: true
        });



    } catch (error) {
        console.log("NewPassword error", error);
        return res.status(500).json({
            message: "Inetrnal Server error",
            success: false
        })
    }
}

export const UpdateUser = async (req, res) => {
    try {
        const { name, email, password } = req.body
        if (!name || !email || !password) {
            return res.status(404).json({
                message: "All feilf required",
                success: false
            })
        }
        console.log(name, email, password);


        const userid = await User.findById(req.user.id)
        console.log(userid);

        const user = await User.findByIdAndUpdate(userid, { name, email, password })
        user.save()

        res.status(200).json({
            message: "Your Profile Is Updated",
            success: true,
            user
        })

    } catch (error) {
        console.log("UpdateUser error", error);
        return res.status(500).json({
            message: "Inetrnal Server error",
            success: false
        })
    }
}



export const GetProfile = async (req, res) => {

    try {
        const user = await User.findById(req.user.id).select('-password')

        if (!user) {
            return res.status(404).json({
                message: "user not found",
                success: false
            })
        }

        res.status(200).json({
            message: "user",
            success: true,
            user
        })

    } catch (error) {
        console.log("GetProfile error", error);
        return res.status(500).json({
            message: "Inetrnal Server error",
            success: false
        })
    }
}


export const UserLogout = async (req, res) => {
    try {
        res.cookie("token", "", {
            maxAge: 0
        })

        res.status(200).json({
            message: "Successfully logout",
            success: true
        })

    } catch (error) {
        console.log("logout error", error);
        return res.status(500).json({
            message: "Inetrnal Server error",
            success: false
        })
    }
}

export const GetUsers = async (req, res) => {
    try {
        const users = await User.find({ role: "user" })

        if (!users) {
            return res.status(404).json({
                message: "Users not found",
                success: false
            })
        }

        res.status(200).json({
            message: "Successfully get users",
            success: true,
            users
        })
    } catch (error) {
        console.log("Getusers error", error);
        return res.status(500).json({
            message: "Inetrnal Server error",
            success: false
        })
    }
}

export const GetSellers = async (req, res) => {
    try {
        const users = await User.find({ role: "seller" })

        if (!users) {
            return res.status(404).json({
                message: "Users not found",
                success: false
            })
        }

        res.status(200).json({
            message: "Successfully get users",
            success: true,
            users
        })
    } catch (error) {
        console.log("Getusers error", error);
        return res.status(500).json({
            message: "Inetrnal Server error",
            success: false
        })
    }
}



export const DeleteUser = async (req, res) => {
    try {
        const user = req.user.id
        console.log(user);

        if (!user) {
            return res.status(404).json({
                message: "User not found",
                success: false
            })
        }
        await User.findByIdAndDelete(user)

        res.status(200).json({ success: true, message: "User deleted" })

    } catch (error) {

    }
}



export const forgorPassword = async (req, res) => {
    try {
        const { email } = req.body;


        if (!email) {
            return res.status(404).json({
                message: "Cant't get Email",
                success: false
            })
        }

        const user = await User.findOne({ email });


        if (!user) {
            return res.status(404).json({
                message: "User not found",
                success: false
            })
        }


        const otp = Math.floor(100000 + Math.random() * 900000).toString()


        user.resetOtp = otp;

        user.expireOtp = Date.now() + 5 * 60 * 1000;

        await user.save();
        await transporter.sendMail({

            from: process.env.USER_EMAIL,
            to: email,
            subject: "Password Reset OTP",

            html: `
                <h2>Password Reset </h2>

                <h1>${otp}</h2>

                <p> This OTP is valid for 5 minutes</p>
            `

        })
        res.json({
            success: true,
            message: "OTP sent Successfully"
        })


    } catch (error) {

        res.json({
            success: false,
            message: error.message
        })
    }
}

export const verifyOtp = async (req, res) => {
    try {
        const { email, otp } = req.body
        console.log(email, otp, "backendemailotp");

        const user = await User.findOne({ email })

        if (!user) {
            return res.json({
                message: "User not found",
                success: false
            })
        }

        if (user.resetOtp !== otp) {
            return res.json({
                message: " Invalid OTP",
                success: false
            })
        }

        if (user.expireOtp < Date.now()) {
            return res.json({
                message: " OTP expired",
                success: false
            })
        }
        
        res.json({
            message: "OTP Verified",
            success: true
        })
    } catch (error) {
        console.log("verifyOtp error", error);
        return res.status(500).json({
            message: "Inetrnal Server error",
            success: false
        })
    }
}


export const resetPassword = async (req, res) => {
    try {
        const { email, password } = req.body



        const user = await User.findOne({ email })

        if (!user) {
            return res.json({
                message: "User not found",
                success: false
            })
        }

        const hashpassword = await bcrypt.hash(password, 10);

        user.password = hashpassword
        user.otp = ""
        user.expireOtp = null

        await user.save()

        console.log("Password Updated Successfully", email, password);


        res.status(200).json({
            message: "Password Updated Successfully",
            success: true
        })

    } catch (error) {
        console.log("resetPassword error", error);
        return res.status(500).json({
            message: "Inetrnal Server error",
            success: false
        })
    }
}