const mongoose = require('mongoose');
const plm = require("passport-local-mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/pintrest");

// Define the schema for the user
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        // required: true
    },
    posts: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post'
    }],
    dp: {
        type: String // URL or path to the profile picture
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    fullname: {
        type: String,
        required: true
    }
}, { timestamps: true }); // Adds createdAt and updatedAt timestamps

userSchema.plugin(plm);

// Create the model from the schema
const User = mongoose.model('User', userSchema);

// Export the model
module.exports = User;
