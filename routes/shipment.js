const express = require("express");

const router = express.Router();

// middlewares
const { authCheck, adminCheck } = require("../middlewares/auth");

// controllers
const {
    create,
    listAll,
    remove,
    read,
    update,
} = require("../controllers/shipment");

// routes
router.post("/shipment", authCheck, adminCheck, create);
router.get("/shipments/:count", listAll);
router.delete("/shipment/:slug", authCheck, adminCheck, remove);
router.get("/shipment/:slug", read);
router.put("shipment/:slug", authCheck, adminCheck, update);

module.exports = router;
