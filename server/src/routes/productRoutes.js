import express from "express";
import {
	getAll,
	getBySlug,
	create,
	update,
	remove,
} from "../controllers/productController.js";
import { verifyAdmin } from "../middlewares/auth.js";

const router = express.Router();

router.get("/", getAll);
router.get("/:slug", getBySlug);

// csak adminnal
router.post("/", verifyAdmin, create);
router.put("/:id", verifyAdmin, update);
router.delete("/:id", verifyAdmin, remove);

export default router;
