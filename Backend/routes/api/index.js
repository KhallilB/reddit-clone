const express = require('express');
const router = express.Router();

// Post functions
const { newPost, allPosts } = require('../../controllers/posts');

// New Post
router.post('/posts/new', newPost);
//All Posts
router.get('/posts', allPosts);

module.exports = router;
