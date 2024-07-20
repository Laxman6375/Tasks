const express = require("express");
const router = new express.Router();

const {createStaff} = require("../controller/staffController");
const {createRight,staffByRight} = require("../controller/rightController");

router.post("/staff/create",createStaff);
router.post("/right/create",createRight);
router.get("/right/staffByRight",staffByRight);

module.exports = router;