const Post = require('../models/Post');

//*** Creates a new post and saves it to database (POST)
//---------------------------------------------------------
const newPost = async (req, res) => {
  try {
    // Define new post object
    const post = await new Post();

    // Set post model properties to form values
    post.title = req.body.title;
    post.url = req.body.url;
    post.description = req.body.description;

    console.log(`Post waiting to be saved: ${post}`);

    // Save post
    await post.save();

    console.log(`Saved post: ${post}`);

    return res.json({ post }).status(200);
  } catch (err) {
    console.log('Error: ', err);
    return res.send(err).status(500);
  }
};

//*** Returns all the reminders (GET)
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

//*** Returns a specific reminder (GET)
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

module.exports = {
  newPost,
  allPosts,
  getPost
};
