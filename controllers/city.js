const City = require("../models/city");
const Province = require("../models/province");
const slugify = require("slugify");

exports.create = async (req, res) => {
    try {
        const { name } = req.body;

        res.json(await new City({ name, slug: slugify(name) }).save());
    } catch (err) {
        res.status(400).send("Create category failed");
    }
};

exports.list = async (req, res) =>
    res.json(await City.find({}).sort({ createAt: -1}).exec());

exports.read = async (req, res) => { 
    let city = await City.findOne({ slug: req.params.slug }).exec();
    res.json(city);
};

exports.update = async (req, res) => {
    const { name } = req.body;
    try {
        const updated = await City.findOneAndUpdate(
            { slug: req.params.slug },
            { name, slug: slugify(name) },
            { new: true }
        );
        res.json(updated);
    } catch (err) {
        res.status(400).send("Create updated failed");
    }
};

exports.remove = async (req, res) => {
    try {
        const deleted = await City.findOneAndDelete({ slug: req.params.slug });
        res.json(deleted);
    } catch (err) {
        res.status(400).send("Create delete failed");
    }
};

exports.getProvinces = (req, res) => {
    Province.find({ parent: req.params._id }).exec((err, provinces) => {
        if (err) console.log(err);
        res.json(provinces);
    });
};