const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: [true, 'Title is required']
  },
  lname: {
    type: String,
    required: [true, "Content can't be blank"]
  },
  phone: {
    type: Number,
    required: [true, "Content can't be blank"]
  }
});

module.exports = mongoose.model('Article', articleSchema);
