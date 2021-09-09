const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        slug: {
            type: String,
            unique: true,
            lowercase: true,
            index: true,
        },
        name: {
            type: String,
            trim: true,
            required: true,
            maxlength: 12,
        },
        price: {
            type: Number,
            maxlength: 8,
            required: true,

        },
        quantity: {
            type: Number,
            maxlength: 2,
            required: true,
        },
        description: {
            type: String,
            maxlength: 2000,
            required: true,
        },
        images: {
            type: Array,
        },
        brand: {
            type: String,
            enum: ["EVGA", "ASUS", "MSI", "SAPPHIRE", "ZOTAC"],
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);