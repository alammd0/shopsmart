import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },

    description : {
        type : String,
        required : true
    },

    prices : {
        type : Array,
        required : true
    },

    // multiple image 
    imageUrl: [{
        type : String,
        required : true
    }],

    ratingAndReview : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'RatingAndReview'
        }
    ],

    category : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Category'
    },

    // seller : {
    //     type : mongoose.Schema.Types.ObjectId,
    //     ref : 'User'
    // },

    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    },

    stock : {
        type : Number,
        required : true
    },

    discount : {
        type : Number,
        required : true
    },

    salesCount : {
        type : Number,
        default : 0
    }
}, {
    timestamps : true
})

const Product = mongoose.model('Product', ProductSchema);
export default Product;