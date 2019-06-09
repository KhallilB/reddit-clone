const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  content: {
    type: String,
    required: [true, 'Content is required in comment']
  }
});

module.exports = Comment = mongoose.model('CommentSchema', CommentSchema);
