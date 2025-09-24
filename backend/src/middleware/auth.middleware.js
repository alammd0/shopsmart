import mongoose from "mongoose";
import jwt from "jsonwebtoken";

export const authMiddleware = async (req, res, next) => {
    try{
        const token = req.headers.authorization;

        if(!token){
            return res.status(401).json({
                message : "Please login first"
            });
        }

        try{
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            req.user = decoded;

            next();
        }
        catch(err){
            console.log(err);
            return res.status(401).json({
                message : "Invalid token"
            });
        }
    }
    catch(err){
        console.log(err);
    }
}

export const sellerAuthenticate = async (req, res, next) => {
    try{
        if(req.user.role !== "Buyer"){
            return res.status(401).json({
                message : "You are not a seller"
            });
        }

        next();
    }
    catch(err){
        res.status(401).json({
            message : "Invalid token"
        });
    }
}

export const buyerAuthenticate = async (req, res, next) => {
    try{
        if(req.user.role !== "Seller"){
            return res.status(401).json({
                message : "You are not a buyer"
            });
        }

        next();
    }
    catch(err){
        res.status(401).json({
            message : "Invalid token"
        });
    }
}

export const adminAuthenticate = async (req, res, next) => {
    try{
        if(req.user.role !== "Admin"){
            return res.status(401).json({
                message : "You are not an admin"
            });
        }

        next();
    }
    catch(err){
        res.status(401).json({
            message : "Invalid token"
        });
    }
}