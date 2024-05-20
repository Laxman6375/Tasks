const mongoose = require("mongoose");
const User = require("../Models/User");
const bcrypt = require("bcrypt");

exports.signup = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;

    const existing_user = await User.findOne({ email });
    if (existing_user) {
      return res.status(400).json({
        success: false,
        message: "User already registered with this email address",
      });
    }

    let hashPassword;
    try {
      hashPassword = await bcrypt.hash(password, 10);
    } catch (error) {
      return res.status(405).json({
        success: false,
        message: "Error while hashing password",
      });
    }

    const user = await User.create({
      username,
      email,
      password: hashPassword,
      role,
    });

    return res.status(200).json({
      success: true,
      message: "User created successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please fill all the feilds",
      });
    }

    let user = await User.findOne({ email });

    if (!user) {
      return res.status(403).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    if (await bcrypt.compare(password, user.password)) {
      let token = user._id;
      user = user.toObject();
      user.token = token;
      user.password = undefined;
      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpsOnly: true,
      };
      res.cookie("token", token, options).status(200).json({
        success: true,
        token,
        user,
        message: "User logged in successfully",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
