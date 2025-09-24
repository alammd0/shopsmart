import express from "express";
import { authMiddleware, sellerAuthenticate } from "../middleware/auth.middleware.js";
import { createProduct, deleteProduct, getProductById, getProducts, updateProduct } from "../controllers/product.controller.js";
import multer from "multer";

const upload = multer({
     storage : multer.memoryStorage()
});

const router = express.Router();


router.post("/", authMiddleware, sellerAuthenticate, upload.array("images"), createProduct);
router.put("/:id", authMiddleware, sellerAuthenticate, upload.array("images"), updateProduct);
router.delete("/:id", authMiddleware, sellerAuthenticate, deleteProduct);
router.get("/:id", getProductById);
router.get("/", getProducts);

export default router;