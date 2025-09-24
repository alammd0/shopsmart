import express from "express";
import { addToCart, getCart, removeFromCart } from "../controllers/cart.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
const router = express.Router();


router.post("/add", authMiddleware, addToCart);
router.get("/", authMiddleware, getCart);
router.delete("/remove", authMiddleware, removeFromCart);

export default router;