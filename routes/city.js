const express = require("express");

const router = express.Router();

// middlewares
const { authCheck, adminCheck } = require("../middlewares/auth");

// controllers
const {
    create,
    list,
    read,
    update,
    remove,
    getProvinces,
} = require("../controllers/city");

// routes
router.post("/city", authCheck, adminCheck, create);
router.get("/city", list);
router.get("/city/:slug", read);
router.put("/city/:slug", authCheck, adminCheck, update);
router.delete("/city/:slug", authCheck, adminCheck, remove);
router.get("/city/provinces/:_id", getProvinces);

module.exports = router;