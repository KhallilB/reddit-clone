const Comment = require('../models/Comment');

const newComment = async (req, res) => {
  try {
    // Define new comment object
    const comment = await new Comment();

    // Set comment properties
    comment.content = req.body.content;

    console.log('Comment waiting to be saved: ', comment);

    // Save comment
    await comment.save();

    console.log('Saved comment: ', comment);

    // Send comment
    return res.json({ comment }).status(200);
  } catch (err) {
    console.log('Error: ', err);
    return res.send(err).status(500);
  }
};

module.exports = {
  newComment
};
