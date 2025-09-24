import express from "express";
import { authMiddleware, sellerAuthenticate } from "../middleware/auth.middleware.js";
// import { addToCart, getCart } from "../controllers/cart.controller";
import { cancelOrder, createOrder, getAllOrders, getSingleOrder, updateOrder } from "../controllers/order.controller.js";

const router = express.Router();

router.post("/", authMiddleware, createOrder);
router.get("/", authMiddleware, getAllOrders);
router.get("/:id", authMiddleware, getSingleOrder);
router.put("/:id", authMiddleware, sellerAuthenticate, updateOrder);
router.delete("/:id", authMiddleware, cancelOrder);

export default router;