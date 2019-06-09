const express = require('express');
const router = express.Router();

// Post functions
const {
  newPost,
  allPosts,
  getPost,
  getSubvue
} = require('../../controllers/posts');

// New Post
router.post('/posts/new', newPost);
// All Posts
router.get('/posts', allPosts);
// Get Post
router.get('/posts/:id', getPost);
// Get Subvues
router.get('/v/:subvue', getSubvue);

module.exports = router;
