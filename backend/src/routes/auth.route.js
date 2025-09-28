
import express from "express";
import { getProfile, login, register, updateProfile } from "../controllers/auth.controller.js";
import { authMiddleware, buyerAuthenticate } from "../middleware/auth.middleware.js";
import { createAddress, updateAddress } from "../controllers/address.controller.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);


router.get("/profile", authMiddleware, getProfile);
router.put("/profile", authMiddleware, updateProfile);


router.post("/create-address", authMiddleware, buyerAuthenticate, createAddress);
router.put("/update-address", authMiddleware, buyerAuthenticate, updateAddress);

export default router;