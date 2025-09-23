import Product from "../model/product.model";
import Order from "../model/order.model";
import User from "../model/user.model";
import Admin from "../model/admin.model";

// Create a new order
export const createOrder = async (req, res) => {
    try{
        const userId = req.user._id;
        const products = req.body.products;

        if(!products){
            return res.status(400).json({
                message : "Please provide products"
            });
        }

        const user = await User.findById(userId);

        if(!user){
            return res.status(400).json({
                message : "User not found"
            });
        }

        const newOrder = await Order.create({
            user : userId,
            products : products,
            totalPrice : products.reduce((acc, curr) => acc + curr.price, 0),
            status : "Pending"
        });

        return res.status(201).json({
            message : "Order created successfully",
            order : newOrder
        });
    }
    catch(err){
        return res.status(500).json({
            message : "Internal server error"
        });
    }
}

// get all orders
export const getAllOrders = async (req, res) => {
    try{
        const allOrders = await Order.find().populate("user").populate("products");

        if(!allOrders){
            return res.status(400).json({
                message : "No orders found"
            });
        }

        return res.status(200).json({
            message : "Orders fetched successfully",
            orders : allOrders
        });
    }
    catch(err){
        return res.status(500).json({
            message : "Internal server error"
        });
    }
}

// get a single order
export const getSingleOrder = async (req, res) => {
    try {
        const orderId = req.params.id;

        if(!orderId){
            return res.status(400).json({
                message : "Please provide an order id"
            });
        }

        const order = await Order.findById(orderId).populate("user").populate("products");

        if(!order){
            return res.status(400).json({
                message : "Order not found"
            });
        }

        return res.status(200).json({
            message : "Order fetched successfully",
            order : order
        });
    }
    catch(err){
        return res.status(500).json({
            message : "Internal server error"
        });
    }
}

// update an order
export const updateOrder = async (req, res) => {
    try{
        const orderId = req.params.id;
        const status = req.body.status;
    

        if(!orderId){
            return res.status(400).json({
                message : "Please provide an order id"
            });
        }

        if(!status){
            return res.status(400).json({
                message : "Please provide a status"
            });
        }

        // const order = await Order.findById(orderId);

        // if(!order){
        //     return res.status(400).json({
        //         message : "Order not found"
        //     });
        // }

        const updatedOrder = await Order.findByIdAndUpdate(orderId, {
            status : status 
        });

        if(!updatedOrder){
            return res.status(400).json({
                message : "Order not updated"
            });
        }

        return res.status(200).json({
            message : "Order updated successfully",
            order : updatedOrder
        });

    }catch(err){
        return res.status(500).json({
            message : "Internal server error"
        });
    }
}

// cancel an order
export const cancelOrder = async (req, res) => {
    try{
        const orderId = req.params.id;

        if(!orderId){
            return res.status(400).json({
                message : "Please provide an order id"
            });
        }

        const order = await Order.findById(orderId);

        if(!order){
            return res.status(400).json({
                message : "Order not found"
            });
        }

        const updatedOrder = await Order.findByIdAndUpdate(orderId, {
            status : "Cancelled"
        });

        if(!updatedOrder){
            return res.status(400).json({
                message : "Order not updated"
            });
        }

        return res.status(200).json({
            message : "Order cancelled successfully",
            order : updatedOrder
        });

    }catch(err){
        return res.status(500).json({
            message : "Internal server error"
        });
    }
}

// delete an order