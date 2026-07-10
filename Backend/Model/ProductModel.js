import mongoose from "mongoose";

export const ProductSchema = new mongoose.Schema({

    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "seller",
        required: true
    },
    
    title: { type: String, required: true },
    category: String,
    subcategory: String,
    brand: String,
    gender: String,
    size: [String],



    price: {
        type: Number,
        min: 0,
        required: true
    },

    images: [
        {
            type: String,
            required: true
        }
    ],

    descimage: [
        {
            type: String,
            required: true
        }
    ],


    discountprice: {
        type: Number,
        min: 0
    },
    originaldiscountprice: {
        type: Number,
        min: 0
    },
    livestock: {
        type: Number,
        min: 0,
        required: true
    },

    tags: [String],
    badges: [String],

    varients: [
        {
            key: String,
            value: String
        }
    ],

    // varient

    varients: [
        {
            color: String,
            colorcode: String,
            stock: Number,
            varientsize: [String],
            verimage: [String]
        }
    ],

    blocktitle: String,
    imgtitle: String,

    description: String,
    shortdescription: { type: String },

    warrenty: String,
    deliverytime: String,

    metatitle: String,
    metadescription: String,

    // Review

    reviwes: [{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
            required: true,
        },

        rating: {
            type: Number,
            min: 1,
            max: 5,
            required: true,
        },
        comment: String,
    }],

    ratings: { type: Number, default: 0 },
    numofreviews: { type: Number, default: 0 }


}, { timestamps: true })

export const Products = mongoose.model("product", ProductSchema)
