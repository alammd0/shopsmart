import Category from '../model/category.model';
import Admin from '../model/admin.model';

export const getCategories = async (req, res) => {
    try{
        const userId = req.user._id;
        const { categoryName } = req.body;

        if(!categoryName){
            return res.status(400).json({
                message : "Please fill all fields"
            });
        }

        // find user 
        const admin = await Admin.findOne({ _id : userId });

        if(!admin){
            return res.status(404).json({
                message : "Admin not found"
            });
        }

        // check if admin is admin
        if(admin.role !== "Admin"){
            return res.status(403).json({
                message : "You are not admin"
            });
        }

        // find category
        const category = await Category.findOne({ categoryName });

        if(!category){
            return res.status(404).json({
                message : "Category not found"
            });
        }

        const newCategory = await Category.create({
            categoryName,
            admin : admin._id
        });

        await Admin.findOneAndUpdate({
            _id : userId
        }, {
            $push : {
                category : newCategory._id
            }
        });

        return res.status(200).json({
            message : "Category fetched successfully",
            category : newCategory
        });
    }
    catch(err){
        console.error(err);
        return res.status(500).json({
            message : err.message || "Some error occurred"
        });
    }
}