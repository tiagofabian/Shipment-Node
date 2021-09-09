const mongoose = require("mongoose");

const citySchema = new mongoose.Schema(
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
            minlength: [2, "Too short"],
            maxlength: [32, "Too Long"],
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("City", citySchema);