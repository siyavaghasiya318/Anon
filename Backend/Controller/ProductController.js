import UploadImg from "../Config/Cloudinary.js";
import { Products } from "../Model/ProductModel.js";
import Seller from "../Model/SellereModel.js";

export const AddProduct = async (req, res) => {
    try {


        const { title, category, subcategory, brand, size, varientsize, gender, price, discountprice, originaldiscountprice, stock, livestock, tags, badges, specificationvalue, color, blocktitle, imgtitle, description, shortdescription, warrenty, deliverytime, metatitle, metadescription } = req.body
        let specifications = [];

        if (req.body.specifications) {
            specifications = JSON.parse(req.body.specifications);
        }
        console.log(req.body.specifications);

        let varients = [];

        if (req.body.varients) {
            varients = JSON.parse(req.body.varients);
        }

        if (!title || !category || !gender || !price || !livestock || !shortdescription || !deliverytime) {
            return res.status(404).json({
                message: "Please fill in all required fields before adding the product.",
                success: false
            })
        }


        const seller = await Seller.findOne({ user: req.user.id })

        if (!seller) {
            return res.status(400).json({
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

        const finalOriginalDiscountPrice =
            req.body.originaldiscountprice === "null" ||
                req.body.originaldiscountprice === ""
                ? 0
                : Number(req.body.originaldiscountprice);


        const product = await Products.create({
            images, verimage, descimage, title, category, size, subcategory, brand, varientsize, gender, price, seller, discountprice, originaldiscountprice: finalOriginalDiscountPrice, stock, livestock, tags, badges, specifications, specificationvalue, varients, color, blocktitle, imgtitle, description, shortdescription, warrenty, deliverytime, metatitle, metadescription
        })




        res.status(200).json({
            message: "Product Addded",
            success: true
        })


    } catch (error) {
        console.log("AddProduct error", error);
        return res.status(500).json({
            message: "Internal Server Error",
            success: false
        })
    }
}


export const Getproducts = async (req, res) => {
    try {

        const product = await Products.find({}).populate('seller', 'shopname').sort({ createdAt: -1 })
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

export const GetSellerProducts = async (req, res) => {
    try {
        const seller = await Seller.findOne({ user: req.user.id })

        if (!seller) {
            res.json({
                message: "Seller not found",
                success: false
            })
        }

        const products = await Products.find({ seller: seller._id }).populate("seller")

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


// export const UpdateProduct = async (req, res) => {
//     try {

//         const { productid } = req.body;
//         console.log("BODY", req.body);
//         console.log("FILES", req.files);

//         if (req.body.specifications) {
//             req.body.specifications = JSON.parse(req.body.specifications)
//         }

//         const product = await Products.findByIdAndUpdate(productid, req.body, { new: true });

//         res.status(200).json({
//             success: true,
//             message: "Product Updated Successfully",
//             product
//         });

//     } catch (error) {
//         console.log("UpdateProduct error", error);
//         res.status(500).json({
//             success: false,
//             message: "Internal Server Error"
//         });
//     }
// };