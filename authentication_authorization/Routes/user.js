const express = require("express");
const router = express.Router();

const { signup, login } = require("../Controller/Auth");
const { auth, isUser, isAdmin } = require("../Middleware/auth");

router.post("/signup", signup);
router.post("/login", login);

router.get("/test", auth, (req, res) => {
  res.json({
    success: true,
    message: "Welcome to test area",
  });
});

router.get("/user", auth, isUser, (req, res) => {
  res.json({
    success: true,
    message: "Welcome to the user area",
  });
});

router.get("/admin", auth, isAdmin, (req, res) => {
  res.json({
    success: true,
    message: "Welcome to the Admin area",
  });
});
module.exports = router;
