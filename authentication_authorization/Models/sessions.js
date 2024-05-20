const mongoose = require("mongoose");
const User = require("../Models/User");

const sessionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
  },
});

module.exports = mongoose.model("session", sessionSchema);
