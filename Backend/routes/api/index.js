const express = require('express');
const router = express.Router();

const checkAuth = require('../../middleware/checkAuth');

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
const { signUp, logIn } = require('../../controllers/auth');

//*** Post Routes
//---------------------------------------------------------
// New Post
router.post('/posts/new', checkAuth, newPost);
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
router.post('/users/signup', signUp);
// Log In
router.post('/users/login', logIn);

module.exports = router;
