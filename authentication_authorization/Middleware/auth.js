const User = require("../Models/User");
const Session = require("../Models/sessions");
const mongoose = require("mongoose");
exports.auth = async (req, res, next) => {
  try {
    const token =
      req.body.token ||
      req.header("Authorization").replace("Bearer ", "") ||
      req.cookies.token;

    if (!token || token === undefined) {
      return res.status(405).json({
        success: false,
        message: "Token not found",
      });
    }
    if (!mongoose.Types.ObjectId.isValid(token)) {
      return res.status(400).json({
        success: false,
        message: "Invalid token",
      });
    }

    try {
      let user = await Session.findById(token).populate("userId");
      if (!user) {
        return res.status(400).json({
          success: false,
          message: "User not found",
        });
      }

      req.user = user;
      next();
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.isUser = async (req, res, next) => {
  try {
    if (req.user.userId.role !== "User") {
      return res.status(400).json({
        success: false,
        message: "This is a protected route for User",
      });
    }
    next();
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.isAdmin = async (req, res, next) => {
  try {
    if (req.user.userId.role !== "Admin") {
      return res.status(400).json({
        success: false,
        message: "This is a protected route for Admin",
      });
    }
    next();
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
