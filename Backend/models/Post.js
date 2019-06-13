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
  },
  subvue: {
    type: String,
    required: [true, 'Subvue is Required']
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Comment'
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now()
  },
  updatedAt: {
    type: Date,
    default: Date.now()
  }
});

module.exports = Post = mongoose.model('PostSchema', PostSchema);
