import { Products } from "../Model/ProductModel.js";
import { Wishlist } from "../Model/WishListModel.js";

export const AddWishlist = async (req, res) => {
    try {
        const { productId } = req.params

        const userid = req.user.id

        const product = await Products.findOne({ _id: productId })

        if (!product) {
            return res.status(401).json({
                success: false,
                message: "Product Not Fount"
            })
        }

        const existWishList = await Wishlist.findOne({
            productid: productId,
            user: userid
        })





        if (existWishList) {
            await Wishlist.findOneAndDelete({ productid: productId, user: userid })

            return res.status(200).json({
                success: true,
                message: "Removed from wishlist"
            })
        }

        const wishlist = await Wishlist.create({
            user: userid,
            productid: productId
        })





        return res.status(201).json({
            success: true,
            message: "Added to wishlist"
        })

    } catch (error) {
        console.log("AddWishlist error", error);
        return res.status(500).json({
            message: "Inetrnal Server error",
            success: false
        })
    }
}

export const getwishlist = async (req, res) => {
    try {
        const userid = req.user.id

        const wishlistitem = await Wishlist.find({ user: userid }).populate("productid")

        if (!userid) {
            return res.status(400).json({
                message: "user not found",
                success: false
            })
        }

        res.status(200).json({
            message: "item wishlisted",
            success: true,
            wishlistitem
        })

    } catch (error) {
        console.log("getwishlist error", error);
        return res.status(500).json({
            message: "Inetrnal Server error",
            success: false
        })
    }
}