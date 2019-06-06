const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Post Title is Required']
  },
  url: {
    type: String,
    required: [true, 'Post Url is Required']
  },
  description: {
    type: String,
    requried: [true, 'Post Description is Required']
  }
});

module.exports = Post = mongoose.model('PostSchema', PostSchema);
