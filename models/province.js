const mongoose = require("mongoose");

const provinceSchema = new mongoose.Schema(
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
        parent: { 
            type: ObjectId,
            ref: "City",
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Province", provinceSchema);