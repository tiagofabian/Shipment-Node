const mongoose = require("mongoose");

const shipmentSchema = new mongoose.Schema(
    {
        slug: {
            type: String,
            unique: true,
            lowercase: true,
            index: true,
        },
        code: {
            type: String,
            required: true,
            minlength: 13,
            maxlength: 13,
        },
        city: {
            type: Object,
            ref: "City",
        },
        province: {
            type: Object,
            ref: "Province",
        },
        transport: {
            type: String,
            enum: ["Chileexpress", "Correos chile", "Starken"],
        },
        payment: {
            type: String,
            enum: ["Debito", "Credito"],
        },
        product: [
            {
                type: Object,
                ref: "Product",
            }
        ],
    },
    { timestamps: true }
);

module.exports = mongoose.model("Shipment", shipmentSchema);