import { fileUpload } from "../config/upload.cloudinary.js";
import Product from "../models/product.model.js";
import User from "../models/user.model.js";

export const createProduct = async (req, res) => {
    try{

        const userid = req.user.id;

        if(!userid){
            return res.status(400).json({
                message : "Please login first"
            });
        }

        const {name, description, prices, category, stock, discount} = req.body;

        if(!name || !description || !prices || !category || !stock || !discount){
            return res.status(400).json({
                message : "Please fill all the fields"
            });
        }

        const images = req.files;

        if(!images){
            return res.status(400).json({
                message : "Please upload an image"
            });
        }

        const findUser = await User.findById(userid);

        if(!findUser){
            return res.status(400).json({
                message : "User not found"
            });
        }

        const imageURL = await fileUpload(images)

        const product = await Product.create({
            name,
            description,
            prices,
            imageUrl : imageURL,
            category,
            stock,
            discount,
            user: findUser._id
        });

        return res.status(201).json({
            message : "Product created successfully",
            product
        });
    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            message : "Internal server error"
        });
    }
}

export const updateProduct = async (req, res) => {
    try{
        const { id } = req.params;

        if(!id){
            return res.status(400).json({
                message : "Please provide a product id"
            });
        }

        const userId = req.user.id;

        if(!userId){
            return res.status(400).json({
                message : "Please login first"
            });
        }

        const {name, description, prices, category, stock, discount} = req.body;
        const product = await Product.findById(id);

        if(!product){
            return res.status(400).json({
                message : "Product not found"
            });
        }

        const images = req.files;

        if(images){
            const imageURL = await fileUpload(images);
            product.imageUrl = imageURL;
        }

        if(userId !== product.user){
            return res.status(400).json({
                message : "You are not the owner of this product"
            });
        }

        if(name){
            product.name = name;
        }

        if(description){
            product.description = description;
        }

        if(prices){
            product.prices = prices;
        }

        if(category){
            product.category = category;
        }

        if(stock){
            product.stock = stock;
        }

        if(discount){
            product.discount = discount;
        }

        await product.save();

        return res.status(200).json({
            message : "Product updated successfully",
            product
        });
    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            message : "Internal server error"
        });
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;

        if(!id){
            return res.status(400).json({
                message : "Please provide a product id"
            });
        }

        const userId = req.user.id;

        if(!userId){
            return res.status(400).json({
                message : "Please login first"
            });
        }

        const product = await Product.findById(id);

        if(!product){
            return res.status(400).json({
                message : "Product not found"
            });
        }

        if(userId !== product.user){
            return res.status(400).json({
                message : "You are not the owner of this product"
            });
        }

        await product.delete();

        return res.status(200).json({
            message : "Product deleted successfully"
        });
    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            message : "Internal server error"
        });
    }
}

export const getProducts = async (req, res) => {
    try{
       // searching, sorting and pagination
       const {search, category, maxPrice, minPrice, sortBy, page = 1, limit = 10} = req.query;

       const filter = {}; 

       if(search){
          filter.name = { $regex : search, $options : "i" };
       }

       if(category){
          filter.category = category;
       }

       if(maxPrice){
          filter.prices = { $lte : maxPrice };
       }

       if(minPrice){
          filter.prices = { $gte : minPrice };
       }

       if(sortBy){
          filter.sortBy = sortBy;
       }

       const products = await Product.find(filter).populate({
          path : "category",
          path : "user",
          path : "ratingAndReview",
          path : "user",
          path : "stock",
          path : "discount"
       }).sort(filter.sortBy).skip((page - 1) * limit).limit(limit);

       return res.status(200).json({
          message : "Products fetched successfully",
          products
       });
    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            message : "Internal server error"
        });
    }
}

export const getProductById = async (req, res) => {
    try{
        const { id } = req.params;

        if(!id){
            return res.status(400).json({
                message : "Please provide a product id"
            });
        }

        const product = await Product.findById(id).populate({
            path : "category",
            path : "user",
            path : "ratingAndReview",
            path : "user",
            path : "stock",
            path : "discount"
        });

        if(!product){
            return res.status(400).json({
                message : "Product not found"
            });
        }

        return res.status(200).json({
            message : "Product fetched successfully",
            product
        });
    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            message : "Internal server error"
        });
    }
}