import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    
    product : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Product'
        }
    ],

    items : {
        type : Number,
        default : 0
    },

    totalPrice : {
        type : Number,
        default : 0
    }
});

const Cart = mongoose.model("Cart", cartSchema);
export default Cart;