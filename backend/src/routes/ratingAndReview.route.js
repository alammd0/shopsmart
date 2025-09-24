
import express from "express";
import { authMiddleware } from "../middleware/auth.middleware";
import { createRatingAndReview, getAllRatingsAndReviews } from "../controllers/ratingAndReview.controller";

const router = express.Router();

router.post("/", authMiddleware, createRatingAndReview);
router.get("/", getAllRatingsAndReviews);

export default router;