import { Cart } from "../Model/CartModel.js";
import { Products } from "../Model/ProductModel.js";

export const Addcart = async (req, res) => {
    try {

        const { productid, size, quentity = 1 } = req.body
        const userid = req.user.id

        if (!size) {
            return res.status(404).json({
                message: "Size is reqired",
                success: false,
            })
        }

        const newProductid = await Products.findById(productid)
        if (!newProductid) {
            return res.status(404).json({
                message: "Product Not Found",
                success: false
            })
        }

        let cart = await Cart.findOne({ user: userid })


        if (!cart) {
            cart = new Cart({
                user: userid,
                item: [],
            })
        }

        const exsistingitem = cart.item.find((item) => item.productid.toString() === productid.toString() && item.size === size)

        if (exsistingitem) {
            exsistingitem.quentity += 1
            exsistingitem.totalPrice = exsistingitem.quentity * newProductid.price

        }

        else {
            cart.item.push({
                productid: productid,
                quentity: quentity,
                size: size,
                totalPrice: newProductid.price * quentity
            })
        }

        const subtotal = await cart.item.reduce((acc, item) => acc + item.totalPrice, 0)

        cart.subtotal = subtotal


        
        const tax = subtotal * 0.05
        const total = subtotal + tax


        cart.total = await total

        await cart.save()

        res.status(200).json({
            message: "Added To Cart",
            success: true
        })


    } catch (error) {
        console.log("AddCart erro", error);
        return res.status(500).json({
            message: "Internal server error",
            success: true
        })
    }
}

export const GetCartProduct = async (req, res) => {
    try {
        const userid = req.user.id

        const cart = await Cart.find({ user: userid }).populate("item.productid")

        if (!userid) {
            return res.status(400).json({
                message: "user not found",
                success: false
            })
        }
        if (!cart) {
            return res.status(400).json({
                message: "cart not found",
                success: false
            })
        }



        res.status(200).json({
            message: "FetchCart",
            success: true,
            cart
        })
    } catch (error) {
        console.log("GetCart erro", error);
        return res.status(500).json({
            message: "Internal server error",
            success: true
        })
    }
}

export const DecreaseQuentity = async (req, res) => {
    try {
        const { productid, size } = req.body
        const userid = req.user.id



        let cart = await Cart.findOne({ user: userid })


        if (!cart) {
            return res.status(400).json({
                message: "Cart Not Found",
                success: false
            })
        }

        const product = await Products.findById(productid)
        // if (!product) {
        //     return res.status(404).json({
        //         message: "Product Not Found",
        //         success: false
        //     })
        // }    


        const existingItem = await cart.item.find(
            (item) =>
                item.productid.toString() === productid.toString() &&
                item.size === size
        )

        if (existingItem.quentity > 1) {
            existingItem.quentity -= 1
            existingItem.totalPrice = existingItem.quentity * product.price
        }
        else {

            cart.item = cart.item.filter(
                item =>
                    !(
                        item.productid.toString() === productid.toString()
                        &&
                        item.size === size
                    )
            )
        }

        const subtotal = await cart.item.reduce((acc, item) => acc + item.totalPrice, 0)

        cart.subtotal = subtotal



        const tax = subtotal * 0.05
        const total = subtotal + tax


        cart.total = await total


        await cart.save()

        res.status(200).json({
            message: "Quentity dec",
            success: true
        })

    } catch (error) {
        console.log("DecreaseQuentity erro", error);
        return res.status(500).json({
            message: "Internal server error",
            success: true
        })
    }
}