const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  commentedAt: {
    type: Date,
    default: Date.now,
  },
});

const blogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    minLength: 5,
    unique: true,
    required: true,
  },
  content: {
    type: String,
    minLength: 50,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
  },
  category: {
    type: String,
    default: 'General',
  },
  likes: {
    type: [String],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  comments: [commentSchema],
});

module.exports = mongoose.model('BlogPost', blogPostSchema);
