import express from "express";
import { authMiddleware, sellerAuthenticate } from "../middleware/auth.middleware";
import { addToCart, getCart } from "../controllers/cart.controller";
import { cancelOrder, createOrder, getAllOrders, getSingleOrder } from "../controllers/order.controller";

const router = express.Router();

router.post("/", authMiddleware, createOrder);
router.get("/", authMiddleware, getAllOrders);
router.get("/:id", authMiddleware, getSingleOrder);
router.put("/:id", authMiddleware, sellerAuthenticate, updateOrder);
router.delete("/:id", authMiddleware, cancelOrder);

export default router;