import {v2 as cloudinary} from  "cloudinary"
import dotenv from "dotenv"
import fs from "fs"

dotenv.config()
cloudinary.config({
    cloud_name : process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
})

const UploadImg = async (filename) => {

    console.log("Uploading:", filename);
    console.log("Exists:", fs.existsSync(filename));

    try {
        const result = await cloudinary.uploader.upload(filename);

        console.log("Success:", filename);

        if (fs.existsSync(filename)) {
            fs.unlinkSync(filename);
        }

        return result.secure_url;
        
    } catch (error) {
        console.log("UploadImg error", error);
        throw error;
    }
};
export default UploadImg 