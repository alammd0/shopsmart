import Product from "../models/product.model.js"
import RatingAndReview from "../models/ratingAndReview.model.js"

// create a new rating and review
export const createRatingAndReview = async (req, res) => {
    try {

        const userId = req.user.id;
        console.log(userId);
        const productId = req.body.productId;
        const rating = req.body.rating;
        const review = req.body.review;

        if(!productId){
            return res.status(400).json({
                message : "Please provide a product id"
            });
        }

        if(!rating && !review){
            return res.status(400).json({
                message : "Please provide a rating or a review"
            });
        };

        const product = await Product.findById(productId);

        if(!product){
            return res.status(400).json({
                message : "Product not found"
            });
        }

        // check if the user has already rated the product
        const ratingAndReview = await RatingAndReview.findOne({
            user : userId,
            product : productId
        });

        if(ratingAndReview){
            return res.status(400).json({
                message : "You have already rated this product"
            });
        }

        const newRatingAndReview = await RatingAndReview.create({
            user : userId,
            product : productId,
            rating : rating,
            review : review
        });

        // After creating a new rating and review, update the product rating and review
        await Product.findByIdAndUpdate(productId, {
            $push : {
                ratingAndReview : newRatingAndReview._id
            }
        });

        res.status(201).json({
            message : "Rating and review created successfully",
            ratingAndReview : newRatingAndReview
        });
    }catch(err){
        res.status(500).json({
            message : "Internal server error"
        });
    }
}

// get all ratings and reviews
export const getAllRatingsAndReviews = async (req, res) => {
    try{
        const allRatingsAndReviews = await RatingAndReview.find().populate("product").populate("user");

        if(!allRatingsAndReviews){
            return res.status(400).json({
                message : "No ratings and reviews found"
            });
        }

        res.status(200).json({
            message : "Ratings and reviews fetched successfully",
            ratingsAndReviews : allRatingsAndReviews
        });

    }catch(err){
        res.status(500).json({
            message : "Internal server error"
        });
    }
}

// get a single rating and review