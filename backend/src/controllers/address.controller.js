import Address from '../models/address.model.js';
import User from '../models/user.model.js';


export const createAddress = async (req, res) => {
    try{
        const userId = req.user.id;
        console.log(userId);

        if(!userId){
            return res.status(400).json({
                message : "Please login first"
            });
        }

        const {street, city, state, zip, country} = req.body;

        if(!street || !city || !state || !zip || !country){
            return res.status(400).json({
                message : "Please fill all fields"
            });
        }

        // find user
        const user = await User.findById(userId);

        if(!user){
            return res.status(400).json({
                message : "User not found"
            });
        }

        const address = await Address.create({
            user : userId,
            street,
            city,
            state,
            zip,
            country
        });

        // here we need to update user address
        await User.findOneAndUpdate({
            _id : userId
            }, {
                $set : {
                    address : address._id
                }
            }, {
                new : true
        });

        return res.status(201).json({
            message : "Address created successfully",
            address
        });
    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            message : "Internal server error"
        });
    }
}

export const updateAddress = async (req, res) => {
    try{
        const userId = req.user.id;
        // console.log(userId);

        // console.log(userId);

        const { street, city, state, zip, country } = req.body;

        const updateAddressValue = {};
        if(street){
            updateAddressValue.street = street;
        }

        if(city){
            updateAddressValue.city = city;
        }

        if(state){
            updateAddressValue.state = state;
        }

        if(zip){
            updateAddressValue.zip = zip;
        }

        if(country){
            updateAddressValue.country = country;
        }

        // find user 
        const user = await User.findById(userId);

        if(!user){
            return res.status(404).json({
                message : "User not found"
            });
        }


        const updatedAddress = await Address.findOneAndUpdate({
            user : user._id
        }, {
            $set : updateAddressValue
        }, {
            new : true
        });

        return res.status(200).json({
            message : "Address updated successfully",
            data : updatedAddress
        });
    }
    catch(err){
        console.error(err);
        return res.status(500).json({
            message : err.message || "Some error occurred"
        });
    }
}