const mongoose = require("mongoose");
const User = require("../Models/User");
const Session = require("../Models/sessions");
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
      let session = await Session.create({
        userId: user._id,
      });

      let token = session._id;

      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpsOnly: true,
      };
      res.cookie("token", token, options).status(200).json({
        success: true,
        user,
        token,
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

exports.suspendOwnAcc = async (req, res) => {
  try {
    const user = req.user;

    if (user.suspended) {
      return res.status(403).json({
        success: false,
        message: "Account is already suspended",
      });
    }

    user.suspended = true;
    await user.save();

    res.status(200).json({
      success: true,
      message: "Your account has been suspended",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.suspendOthersAcc = async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }

    if (user.suspended) {
      return res.status(403).json({
        success: false,
        message: "Account is already suspended",
      });
    }

    (user.suspended = true), await user.save();
    return res.status(200).json({
      success: true,
      message: `User ${user.username}'s A/c is suspended`,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
