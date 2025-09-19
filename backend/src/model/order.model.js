import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },

    products : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Product'
        }
    ],

    totalPrice : {
        type : Number
    },

    status : {
        type : String,
        enum : ["Pending", "Delivered", "Cancelled"],
        default : "Pending"
    }
})

export default mongoose.model('Order', OrderSchema);