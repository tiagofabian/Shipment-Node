const Shipment = require("../models/shipment");
const slugify = require("slugify");

exports.create = async (req, res) => {
    try {
        req.body.slug = slugify(req.body.name);
        const newShipment = await new Shipment(req.body).save();
        res.json(newShipment);

    } catch (err) {
        console.log(err);
        res.status(400).json({
            err: err.message,
        });
    }
};

exports.listAll = async (req, res) => {
    let shipments = await Shipment.find({})
        .limit(parseInt(req.params.count))
        .populate("city")
        .populate("province")
        .sort([["createdAt", "desc"]])
        .exec();
    res.json(shipments);
};

exports.remove = async (req, res) => {
    try {
        const deleted = await Shipment.findOneAndRemove({
            slug: req.params.slug,
        }).exec();
        res.json(deleted);
    } catch (err) {
        console.log(err);
        return res.status(400).send("Product deleted failed");
    }
};

exports.read = async (req, res) => {
    const shipment = await Shipment.findOne({ slug: req.params.slug })
        .populate("category")
        .populate("subs")
        .exec();
    res.json(shipment);
};

exports.update = async (req, res) => {
    try {
        if (req.body.name) {
            req.body.slug = slugify(req.body.name);
        }
        const updated = await Shipment.findOneAndUpdate(
            { slug: req.params.slug },
            req.body,
            { new: true }
        ).exec();
        res.json(updated);
    } catch (err) {
        console.log("PRODUCT UPDATE ERROR ---->", err);
        res.status(400).json({
            err: err.message,
        });
    }
};