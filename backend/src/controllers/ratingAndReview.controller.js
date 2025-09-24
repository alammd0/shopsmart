import Product from "../model/product.model.js"
import RatingAndReview from "../model/ratingAndReview.model.js"

// create a new rating and review
export const createRatingAndReview = async (req, res) => {
    try {

        const userId = req.user._id;
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

        // const user = await user.findById(userId);

        // if(!user){
        //     return res.status(400).json({
        //         message : "User not found"
        //     });
        // }

        const product = await Product.findById(productId);

        if(!product){
            return res.status(400).json({
                message : "Product not found"
            });
        }

        const newRatingAndReview = await RatingAndReview.create({
            user : userId,
            product : productId,
            rating : rating,
            review : review
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