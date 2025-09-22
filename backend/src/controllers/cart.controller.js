import User from "../model/user.model";
import Cart from "../models/cart.model";
import Product from "../models/product.model";
import user from "../models/user.model";

export const addToCart = async (req, res) => {
    try{

        // find Product Id
        const { productId } = req.body;

        if(!productId){
            return res.status(400).json({
                message : "Please fill all fields"
            });
        }

        // find Product
        const product = await Product.findById(productId);

        if(!product){
            return res.status(400).json({
                message : "Product not found"
            });
        }

        const userId = req.user._id;
        const cart = await User.findOne({ _id : userId }).select("cart");

        // TODO: check if product is already in cart
        if(!cart){
            const newCart = await Cart.create({
                user : userId,
                product : [product._id],
                // $inc : {
                //     items : 1,
                //     totalPrice : product.prices
                // }
            });
        

            return res.status(200).json({
                message : "Product added to cart successfully",
                cart : newCart
            });
        }

        const updatedCart = await Cart.findOneAndUpdate({
            user : userId
        }, {
            $push : {
                product : product._id
            }
        }, {
            new : true
        });

        return res.status(200).json({
            message : "Product added to cart successfully",
            cart : updatedCart
        });
    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            message : "Internal server error"
        });
    }
}

export const getCart = async (req, res) => {
    try{
        // find user Id
        const userId = req.user._id;
        const cart = await User.findOne({ _id : userId }).select("cart");

        if(!cart){
            return res.status(400).json({
                message : "Cart not found"
            });
        }

        return res.status(200).json({
            message : "Cart fetched successfully",
            cart
        });
    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            message : "Internal server error"
        });
    }
}

export const removeFromCart = async (req, res) => {
    try{
        const { productId } = req.body;

        if(!productId){
            return res.status(400).json({
                message : "Please fill all fields"
            });
        }

        const product = await Product.findById(productId);

        if(!product){
            return res.status(400).json({
                message : "Product not found"
            });
        }

        const userId = req.user._id;
        const cart = await User.findOne({ _id : userId }).select("cart");

        if(!cart){
            return res.status(400).json({
                message : "Cart not found"
            });
        }

        const updatedCart = await Cart.findOneAndUpdate({
            user : userId
        }, {
            $pull : {
                product : product._id
            }
        }, {
            new : true
        });

        return res.status(200).json({
            message : "Product removed from cart successfully",
            cart : updatedCart
        });
    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            message : "Internal server error"
        });
    }
}