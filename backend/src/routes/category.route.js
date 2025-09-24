import express from "express";
import { adminAuthenticate, authMiddleware, buyerAuthenticate } from "../middleware/auth.middleware";
import { createCategories, getCategories } from "../controllers/category.controller";

const router =  express.Router();

router.post("/", authMiddleware, adminAuthenticate, createCategories);
router.get("/", authMiddleware, buyerAuthenticate, getCategories);

export default router;