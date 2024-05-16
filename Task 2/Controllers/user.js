const express = require("express");
const User = require("../Models/Model");

exports.getUser = async (req, res) => {
  try {
    const user = await User.find();
    res.send(user);
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.createUser = async (req, res) => {
  try {
    const { name, email, age } = req.body;

    let existing_user = await User.findOne({ email });
    if (existing_user) {
      return res.status(409).json({
        success: false,
        message: "User already exists with the given email",
      });
    }

    const user = await User.create({
      name,
      email,
      age,
    });

    return res.status(200).json({
      success: true,
      message: "User created successfully",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, age } = req.body;
    await User.findByIdAndUpdate(id, { name, email, age });
    return res.status(200).json({
      success: true,
      message: "User updated successfully",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    return res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
