const express = require('express');
const router = express.Router();

// Post functions
const {
  newPost,
  allPosts,
  getPost,
  getSubvue
} = require('../../controllers/posts');

// Comment functions
const { newComment } = require('../../controllers/comments');

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

// router.route('/posts/new').post(newPost);

// router.route('/posts').get(allPosts);

// router.route('/posts/:id').get(getPost);

// router.route('/v/:subvue').get(getSubvue)

//*** Comment Routes
//---------------------------------------------------------
// New Comment
router.post('/posts/:id/comments', newComment);

module.exports = router;
