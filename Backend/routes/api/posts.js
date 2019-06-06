const express = require('express');
const router = express.Router();

const { newPost } = require('../../controllers/posts');

// Create new post
router.post('/posts/new');
