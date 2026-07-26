import { v2 as cloudinary } from 'cloudinary'

import fs from "fs"


const uploadOnCloudinary = async (filePath) => {
    cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});
    console.log("CLOUD NAME:", process.env.CLOUDINARY_NAME)
    console.log("API KEY:", process.env.CLOUDINARY_API_KEY)
    console.log("SECRET LENGTH:", process.env.CLOUDINARY_API_SECRET?.length)
    console.log("FILE PATH RECEIVED:", filePath) 
try {
    if(!filePath){
        return null
    }
    const uploadResult = await cloudinary.uploader.upload(filePath,{resource_type:'auto'})
    fs.unlinkSync(filePath)
    return uploadResult.secure_url

} catch (error) {
    fs.unlinkSync(filePath)
    console.log("FULL ERROR:", JSON.stringify(error, null, 2))
}
}

export default uploadOnCloudinary
