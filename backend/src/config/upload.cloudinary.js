import dotenv from "dotenv";
dotenv.config();
import {v2 as cloudinary} from "cloudinary";

// console.log("Cloudinary Name:", process.env.CLOUDINARY_CLOUD_NAME);
// console.log("Cloudinary Key:", process.env.CLOUDINARY_API_KEY);
// console.log("Cloudinary Secret:", process.env.CLOUDINARY_API_SECRET);

const cloudinaryConfig = {
    cloud_name : process.env.CLOUDINARY_CLOUD_NAME,
    api_key : process.env.CLOUDINARY_API_KEY,
    api_secret : process.env.CLOUDINARY_API_SECRET
}

cloudinary.config(cloudinaryConfig);

export const fileUpload = async(files) => {

    try{
        const uploadResponse = files.map ( (file) => {
            const base64 = `data:${file.mimetype};base64,${file.buffer.toString("base64")}`
            return cloudinary.uploader.upload(base64, {
                folder : "shopsmart",
                resource_type: "auto"
            })
        })

        const result = await Promise.all(uploadResponse);
        return result.map(res => res.secure_url);
    }
    catch(err){
        console.error(err);
        return null;
    }
};