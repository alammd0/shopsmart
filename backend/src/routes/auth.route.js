
import express from "express";
import { getProfile, login, register, updateProfile } from "../controllers/auth.controller";
import { authMiddleware } from "../middleware/auth.middleware";
import { updateAddress } from "../controllers/address.controller";

const router = express.Router();

router.post("/register", register);

router.post("/login", login);


router.get("/profile", authMiddleware, getProfile);
router.put("/profile", authMiddleware, updateProfile);


router.put("/update-address", authMiddleware, updateAddress);


export default router;