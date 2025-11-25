// import express from "express";
// import multer from "multer";
// import cloudinary from "../config/cloudinary.js";

// const uploadRouter = express.Router();
// const upload = multer({ storage: multer.memoryStorage() });

// uploadRouter.post("/upload", upload.single("image"), async (req, res) => {
//   try {
//     if (!req.file) {
//       return res.status(400).json({ error: "No file uploaded" });
//     }

//     const file = req.file;

//     const uploadStream = cloudinary.uploader.upload_stream(
//       { folder: "foods" },
//       (error, result) => {
//         if (error) {
//           return res.status(500).json({ error: error.message });
//         }
//         return res.json({
//           url: result.secure_url,
//           public_id: result.public_id,
//         });
//       }
//     );

//     uploadStream.end(file.buffer);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// export default uploadRouter;
