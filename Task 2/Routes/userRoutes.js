const { Router } = require("express");
const { getUser, createUser, updateUser, deleteUser } = require("../Controllers/user")
const router = Router()

router.get("/get", getUser);
router.post("/create", createUser);
router.put("/update/:id", updateUser);
router.delete("/delete/:id", deleteUser);

module.exports = router;