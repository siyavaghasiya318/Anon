import UploadImg from "../Config/Cloudinary.js";
import { Products } from "../Model/ProductModel.js";
import Seller from "../Model/SellereModel.js";

export const AddProduct = async (req, res) => {
    try {

        const {
            title,
            category,
            subcategory,
            brand,
            size,
            varientsize,
            gender,
            price,
            stock,
            livestock,
            tags,
            badges,
            specificationvalue,
            color,
            blocktitle,
            imgtitle,
            description,
            shortdescription,
            warrenty,
            deliverytime,
            metatitle,
            metadescription
        } = req.body;
        console.log(req.body);

        let specifications = [];
        if (req.body.specifications) {
            specifications = JSON.parse(req.body.specifications);
        }



        let varients = [];

        if (
            req.body.varients &&
            req.body.varients !== "undefined" &&
            req.body.varients !== "null"
        ) {
            try {
                varients = JSON.parse(req.body.varients);
            } catch (error) {
                return res.status(400).json({
                    success: false,
                    message: "Invalid variants JSON"
                });
            }
        }

        if (
            !title ||
            !category ||
            !gender ||
            !price ||
            !livestock ||
            !shortdescription ||
            !deliverytime
        ) {
            return res.status(400).json({
                message: "Please fill all required fields.",
                success: false
            });
        }

        const seller = await Seller.findOne({ user: req.user.id });

        if (!seller) {
            return res.status(400).json({
                message: "Seller not found",
                success: false
            });
        }

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

        // Number conversion
        const finalDiscountPrice =
            req.body.discountprice === "" ||
                req.body.discountprice === "null" ||
                req.body.discountprice == null
                ? 0
                : Number(req.body.discountprice);

        const finalOriginalDiscountPrice =
            req.body.originaldiscountprice === "" ||
                req.body.originaldiscountprice === "null" ||
                req.body.originaldiscountprice == null
                ? 0
                : Number(req.body.originaldiscountprice);

        const product = await Products.create({
            seller: seller._id,

            title,
            category,
            subcategory,
            brand,
            gender,

            size,

            price: Number(price),
            discountprice: finalDiscountPrice,
            originaldiscountprice: finalOriginalDiscountPrice,
            livestock: Number(livestock),
            stock: Number(stock),

            images,
            descimage,
            verimage,

            tags,
            badges,

            specifications,
            specificationvalue,
            varients,

            color,
            varientsize,

            blocktitle,
            imgtitle,
            description,
            shortdescription,

            warrenty,
            deliverytime,

            metatitle,
            metadescription
        });



        res.status(200).json({
            success: true,
            message: "Product Added Successfully",
            product
        });

    } catch (error) {
        console.log("AddProduct error", error);

        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};


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


export const UpdateProduct = async (req, res) => {
    try {

        const { productid } = req.params;

        console.log(req.body.specifications);



        const seller = await Seller.findOne({ user: req.user.id });

        if (!seller) {
            return res.status(400).json({
                success: false,
                message: "Seller not found"
            });
        }

        if (!productid) {
            return res.status(400).json({
                success: false,
                message: "Product not found"
            });
        }

        // Parse JSON
        if (req.body.specifications) {
            req.body.specifications = JSON.parse(req.body.specifications);
        }

        if (req.body.varients) {
            req.body.varients = JSON.parse(req.body.varients);
        }

        // Number fields
        if (req.body.price) req.body.price = Number(req.body.price);
        if (req.body.livestock) req.body.livestock = Number(req.body.livestock);

        req.body.discountprice =
            req.body.discountprice === "" ||
                req.body.discountprice === "null" ||
                req.body.discountprice == null
                ? 0
                : Number(req.body.discountprice);

        req.body.originaldiscountprice =
            req.body.originaldiscountprice === "" ||
                req.body.originaldiscountprice === "null" ||
                req.body.originaldiscountprice == null
                ? 0
                : Number(req.body.originaldiscountprice);

        // Upload new images
        if (req.files && req.files.length > 0) {

            const images = await Promise.all(
                req.files
                    .filter(file => file.fieldname === "images")
                    .map(file => UploadImg(file.path))
            );

            const verimage = await Promise.all(
                req.files
                    .filter(file => file.fieldname === "verimage")
                    .map(file => UploadImg(file.path))
            );

            const descimage = await Promise.all(
                req.files
                    .filter(file => file.fieldname === "descimage")
                    .map(file => UploadImg(file.path))
            );

            if (images.length > 0) req.body.images = images;
            if (verimage.length > 0) req.body.verimage = verimage;
            if (descimage.length > 0) req.body.descimage = descimage;
        }

        const product = await Products.findByIdAndUpdate(
            productid,
            {
                ...req.body,
                seller: seller._id
            },
            {
                new: true,
                runValidators: true
            }
        );

        res.status(200).json({
            success: true,
            message: "Product Updated Successfully",
            product
        });

    } catch (error) {
        console.log("UpdateProduct Error:", error);

        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};