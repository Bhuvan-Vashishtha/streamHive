import multer from "multer"
import path from "path"

let storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null , "./public")
    },
    filename:(req,file,cb)=>{
        // Try to get extension from original filename first
        let ext = path.extname(file.originalname)

        // If no extension found, fall back to mimetype
        if (!ext) {
            const mimeExtMap = {
                "video/mp4": ".mp4",
                "video/quicktime": ".mov",
                "video/webm": ".webm",
                "image/jpeg": ".jpg",
                "image/png": ".png",
                "image/webp": ".webp"
            }
            ext = mimeExtMap[file.mimetype] || ""
        }

        const uniqueName = Date.now() + "-" + Math.round(Math.random() * 1e9) + ext
        cb(null, uniqueName)
    }
})

const upload = multer({storage})

export default upload