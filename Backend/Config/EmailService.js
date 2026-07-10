import nodemailer from 'nodemailer'
import dotenv from "dotenv"
dotenv.config();

const transporter = nodemailer.createTransport({
    service: "gmail",

    auth:{
        user: process.env.USER_EMAIL,
        pass: process.env.EMAIL_PASS
    },
    
})

console.log("EMAIL:", process.env.USER_EMAIL);
console.log("PASS:", process.env.EMAIL_PASS ? "Found" : "Not Found");   
export default transporter

