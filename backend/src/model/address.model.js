import mongoose from 'mongoose';

const AddressSchema = new mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },

    street : {
        type : String,
    },

    city : {
        type : String,
    },

    state : {
        type : String,
    },

    zip : {
        type : String,
    },

    country : {
        type : String
    }
}, {
    timestamps : true
})

export default mongoose.model('Address', AddressSchema);