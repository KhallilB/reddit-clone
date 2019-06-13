const Post = require('../models/Post');
const Comment = require('../models/Comment');
const User = require('../models/User');

const validatePost = require('../validation/posts');

//*** Creates a new post (POST)
//---------------------------------------------------------
const newPost = async (req, res) => {
  try {
    // Form validation
    const { errors, isValid } = validatePost(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    // Define new post object
    const post = await new Post();
    console.log('User That is Req.user', req.user);
    post.author = req.user.subject;

    // Set post model properties to form values
    post.title = req.body.title;
    post.url = req.body.url;
    post.description = req.body.description;
    post.subvue = req.body.subvue;

    // Save post
    await post
      .save()
      .then(post => {
        return User.findById(req.user.subject);
      })
      .then(user => {
        user.posts.unshift(post);
        user.save();
        res.json({ post }).status(200);
      })
      .catch(err => {
        console.log('Error, ', err);
      })
      .catch(err => {
        console.log('Error: ', err);
      });
  } catch (err) {
    console.log('Error: ', err);
    return res.send(err).status(500);
  }
};

//*** Returns all the posts (GET)
//---------------------------------------------------------
const allPosts = async (req, res) => {
  try {
    // Find all Posts
    await Post.find({}).then(posts => {
      // Send all posts
      res.json({ posts }).status(200);
    });
  } catch (err) {
    console.log('Error: ', err);
    return res.send(err).status(500);
  }
};

//*** Returns a specific post (GET)
//---------------------------------------------------------
const getPost = async (req, res) => {
  try {
    // Find specific post
    await Post.findById(req.params.id).then(post => {
      // Check found post
      console.log(`Found post: ${post}`);
      // Send found post
      res.json({ post }).status(200);
    });
  } catch (err) {
    console.log('Error: ', err);
    return res.send(err).status(500);
  }
};

//*** Get all posts under a specific subvue (GET)
//---------------------------------------------------------
const getSubvue = async (req, res) => {
  try {
    // Find specific subvue
    await Post.find({ subvue: req.params.subvue }).then(posts => {
      // Send all posts
      res.json({ posts }).status(200);
    });
  } catch (err) {
    console.log('Error: ', err);
    return res.send(err).status(500);
  }
};

//*** Create instance of comment (POST)
//---------------------------------------------------------
const createComment = async (req, res) => {
  try {
    // Instantiate instance of model
    const comment = await new Comment(req.body);

    // Save instance
    await comment
      .save()
      .then(comment => {
        return Post.findById(req.params.id);
      })
      .then(post => {
        post.comments.unshift(comment);
        post.save();
        res.json({ comment }).status(200);
      })
      .catch(err => {
        console.log('Error', err);
      })
      .catch(err => {
        console.log('Error, ', err);
      });
  } catch (err) {
    console.log('Error: ', err);
    return res.send(err).status(500);
  }
};
module.exports = {
  newPost,
  allPosts,
  getPost,
  getSubvue,
  createComment
};
