import { Cart } from "../Model/CartModel.js";
import Order from "../Model/Ordermodel.js";
import { Products } from "../Model/ProductModel.js";
import Seller from "../Model/SellereModel.js";
import UserAddress from "../Model/UserAddressModel.js";

export const CreateOrder = async (req, res) => {
    try {
        const { addressId, paymentMethod } = req.body
        const userid = req.user.id

        const cart = await Cart.findOne({ user: userid }).populate("item.productid");


        if (!cart || cart.item.length === 0) {
            return res.status(400).json({
                success: false,
                message: "Cart is empty"
            });
        }

        const address = await UserAddress.findById(addressId)

        if (!address) {
            return res.status(404).json({
                success: false,
                message: "Address not found"
            })
        }

        if (!cart || cart.item.length === 0) {
            return res.status(400).json({
                success: false,
                message: "Cart is empty"
            })
        }

        const sellersOrder = {};


        for (const item of cart.item) {
            const sellerId = item.productid.seller.toString();

            if (!sellersOrder[sellerId]) {
                sellersOrder[sellerId] = []
            }

            sellersOrder[sellerId].push(item)

        }

        for (const sellerId in sellersOrder) {
            const items = sellersOrder[sellerId];

            let subtotal = 0;

            items.forEach((item) => {
                subtotal += item.totalPrice;
            })

            const tax = subtotal * 0.05
            const total = subtotal + tax

            const order = await Order.create({
                user: userid,
                seller: sellerId,
                item: items,
                address: {
                    name: address.name,
                    phoneno: address.phoneno,
                    streetaddress: address.streetaddress,
                    landmark: address.landmark,
                    city: address.city,
                    state: address.state,
                    pincode: address.pincode,
                    landmark: address.landmark,
                    label: address.label,
                    isDefault: address.isDefault,
                },
                paymentMethod,

                paymentStatus: paymentMethod === "stripe"
                    ? "paid"
                    : "pending",

                subtotal,
                tax,
                total,
            })


        }
        cart.item = []
        // cart.subtotal = 0
        cart.total = 0

        await cart.save()


        // console.log("created order:", order);
        return res.status(201).json({
            success: true,
            message: "Order created successfully",
        })

    } catch (error) {
        console.log("CreateOrder error", error);
        return res.status(500).json({
            message: "Internal server error",
            success: false
        })
    }
}


export const GetOrderItem = async (req, res) => {
    try {

        const seller = await Seller.findOne({
            user: req.user.id
        })


        if (!seller) {
            return res.status(404).json({
                success: false,
                message: "Seller not found"
            })
        }

        const orderdata = await Order.find({ seller: seller._id }).populate("item.productid").populate("address").sort({ createdAt: -1 });



        res.status(200).json({
            message: "getorder successfully",
            success: true,
            orderdata
        })


    } catch (error) {
        console.log("GetOrderItem error", error);
        return res.status(500).json({
            message: "Internal server error",
            success: false
        })
    }
}


export const GetMyOrders = async (req, res) => {
    try {

        const orders = await Order.find({ user: req.user.id }).populate("item.productid").sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            orders
        })

    } catch (error) {
        console.log("GetMyOrder", rror)
        res.status(500).json({
            success: false,
            message: "Internal server error"
        })

    }
}


export const UpdateOrder = async (req, res) => {
    try {
        const { orderstatus, orderid } = req.body;

        if (!orderstatus) {
            return res.status(400).json({
                success: false,
                message: "Order status required"
            });
        }

        const seller = await Seller.findOne({
            user: req.user.id
        });

        if (!seller) {
            return res.status(404).json({
                success: false,
                message: "Seller not found"
            });
        }

        const order = await Order.findOne({
            _id: orderid,
            seller: seller._id
        });

        if (!order) {
            return res.status(404).json({
                success: false,
                message: "Order not found"
            });
        }

        order.orderStatus = orderstatus;

        if (orderstatus === "Delivered") {
            order.deliveredDate = new Date();
        }

        await order.save();

        res.status(200).json({
            success: true,
            message: "Order status updated successfully",
            order
        });

    } catch (error) {
        console.log("UpdateOrder", error);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};

