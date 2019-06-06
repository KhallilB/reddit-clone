const Post = require('../models/Post');

//*** Creates a new post and saves it to database
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

module.exports = {
  newPost
};
