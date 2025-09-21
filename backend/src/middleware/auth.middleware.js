import mongoose from "mongoose";
import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
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