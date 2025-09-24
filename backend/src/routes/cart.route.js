import express from "express";
import { addToCart, getCart, removeFromCart } from "../controllers/cart.controller";
import { authMiddleware } from "../middleware/auth.middleware";
const router = express.Router();


router.post("/add", authMiddleware, addToCart);
router.get("/", authMiddleware, getCart);
router.delete("/remove", authMiddleware, removeFromCart);

export default router;