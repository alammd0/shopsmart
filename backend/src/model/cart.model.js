import mongoose, { Mongoose } from 'mongoose';

const CartSchema = new mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },

    product : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Product'
    },

    quantity : {
        type : Number,
    },

    total : {
        type : Number,
    },

    price : {
        type : Number
    },

    totalPrice : {
        type : Number
    }
}, {
    timestamps : true
})

export default mongoose.model('Cart', CartSchema);