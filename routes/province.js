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
} = require("../controllers/province");

// routes - endpoints
router.post("/province", authCheck, adminCheck, create);
router.get("/provinces", list);
router.get("/province/:slug", read);
router.put("/province/:slug", authCheck, adminCheck, update);
router.delete("/province/:slug", authCheck, adminCheck, remove);

module.exports = router;