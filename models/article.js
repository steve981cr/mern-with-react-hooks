const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({ 
  title: {
    type: String,
    required: [true, "Title is required"]
  },
  content: {
    type: String,
    required: [true, "Content can't be blank"]
  }
});

module.exports = mongoose.model('Article', articleSchema); 