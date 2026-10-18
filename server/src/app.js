import express from "express";
import cors from "cors";
import upload from "./config/multer.js";
import productRoutes from "./routes/productRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/images", express.static("assets/images"));

app.post("/images", upload.single("file"), (req, res) => {
	if (!req.file) {
		return res.status(400).json("Nem érkezett feltöltendő kép.");
	}

	res.status(200).json("Kép sikeresen feltöltve!");
});

app.use("/api/products", productRoutes);
app.use("/api/admin", adminRoutes);

export default app;
