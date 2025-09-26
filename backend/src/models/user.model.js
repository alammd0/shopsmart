import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },

    email : {
        type : String,
        required : true ,
        unique : true
    },

    phone : {
        type : String,
    },

    image : {
        type : String,
    },

    role : {
        type : String,
        required: true,
        default : "Buyer",
        enum : ["Seller",  "Buyer"],
    },

    // change here
    cart : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Cart',
        default : null
    },

    orders : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Order'
        }
    ],

    address : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Address',
        default : null
    },

    product : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Product'
        }
    ],

    password : {
        type : String,
        required : true
    },
}, {
    timestamps : true
})

const User = mongoose.model("User", userSchema);
export default User;