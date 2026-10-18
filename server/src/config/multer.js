import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "assets/images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.filename || file.originalname);
  },
});

const upload = multer({ storage });

export default upload;