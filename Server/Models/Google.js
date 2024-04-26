const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    googleId: String,
    displayName: String,
    email: String,
    image: String
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

module.exports = User;
