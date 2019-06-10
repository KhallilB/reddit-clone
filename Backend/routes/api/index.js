const express = require('express');
const router = express.Router();

// Post functions
//---------------------------------------------------------
const {
  newPost,
  allPosts,
  getPost,
  getSubvue,
  createComment
} = require('../../controllers/posts');

// Comment functions
//---------------------------------------------------------
const { newComment } = require('../../controllers/comments');

// Auth functions
//---------------------------------------------------------
const { signUp } = require('../../controllers/auth');

//*** Post Routes
//---------------------------------------------------------
// New Post
router.post('/posts/new', newPost);
// All Posts
router.get('/posts', allPosts);
// Get Post
router.get('/posts/:id', getPost);
// Get Subvues
router.get('/v/:subvue', getSubvue);
// Create Comment
router.post('/posts/:id/comments', createComment);

//*** Comment Routes
//---------------------------------------------------------
// New Comment
router.post('/posts/:id/comments', newComment);

//*** Auth Routes
//---------------------------------------------------------
// Sign Up
router.post('/users/new', signUp);

module.exports = router;
