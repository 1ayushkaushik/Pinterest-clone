const mongoose = require('mongoose');

// Define the schema for the post
const postSchema = new mongoose.Schema({
    imageText: {
        type: String,
        required: true
    },

    image: {
        type: String
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    likes: {
        type: Array,
        default: 0
    }
});

// Create the model from the schema
const Post = mongoose.model('Post', postSchema);

// Export the model
module.exports = Post;
