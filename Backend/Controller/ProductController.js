import UploadImg from "../Config/Cloudinary.js";
import { Products } from "../Model/ProductModel.js";
import Seller from "../Model/SellereModel.js";

export const AddProduct = async (req, res) => {
    try {

        
        const { title, category, subcategory, brand,size,varientsize, gender, price, discountprice, originaldiscountprice, stock, livestock, tags, badges, specificationname, specificationvalue, varients, color, blocktitle, imgtitle, description, shortdescription, warrenty, deliverytime, metatitle, metadescription } = req.body

        if (!title || !category || !gender   || !price  || !livestock || !shortdescription || !deliverytime) {
            return res.status(404).json({
                message: "Please fill in all required fields before adding the product.",
                success: false
            })
        }


        const seller = await Seller.findOne({user:req.user.id})

    
        // console.log("sellerproductcontroller",seller);
  
        

        if(!seller){
            res.json({
                message: "Seller not found",
                success: false
            })
        }
        
        // console.log("size",size);
        
        let images = [];
        let verimage = [];
        let descimage = [];

        if (req.files && req.files.length > 0) {

            images = await Promise.all(
                req.files
                    .filter(file => file.fieldname === "images")
                    .map(file => UploadImg(file.path))
            );

            verimage = await Promise.all(
                req.files
                    .filter(file => file.fieldname === "verimage")
                    .map(file => UploadImg(file.path))
            );

            descimage = await Promise.all(
                req.files
                    .filter(file => file.fieldname === "descimage")
                    .map(file => UploadImg(file.path))
            );

        }



        
        const product = await Products.create({
            images,verimage,descimage,title, category,size, subcategory,brand,varientsize, gender, price,seller, discountprice, originaldiscountprice, stock, livestock, tags, badges, specificationname, specificationvalue, varients, color, blocktitle, imgtitle, description, shortdescription, warrenty, deliverytime, metatitle, metadescription
        })

        


        res.status(200).json({
            message: "Product Addded",
            success:true
        })


    } catch (error) {
        console.log("AddProduct error", error);
        return res.status(500).json({
            message: "Internal Server Error",
            success: false
        })
    }
}


export const Getproducts = async(req,res) => {
    try {

        const product = await Products.find({}).populate('seller', 'shopname')
        // console.log("getproductcontroller", product);
        
        res.status(200).json({
            message: 'products fetch successfully',
            success: true,
            product
        })
        
    } catch (error) {
        console.log("Getproduct error", error);
        return res.status(500).json({
            message: "Internal Server Error",
            success: false
        })
    }
}

export const GetSellerProducts = async(req,res) => {
    try {
        const seller  = await Seller.findOne({user: req.user.id})

        if(!seller){
            res.json({
                message: "Seller not found",
                success: false
            })
        }

        const products = await Products.find({seller:seller._id}).populate("seller")

        res.status(200).json({
            message: "Seller products fetched successfully",
            success: true,
            products
        })
    } catch (error) {
        console.log("GetSellerProducts error", error);
        return res.status(500).json({
            message: "Internal Server Error",
            success: false
        })
    }
} 