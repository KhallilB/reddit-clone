const express = require('express');
const router = express.Router();

// Post functions
const { newPost } = require('../../controllers/posts');

router.post('/posts/new', newPost);

module.exports = router;
