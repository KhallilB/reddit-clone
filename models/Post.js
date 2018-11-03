const mongoose = require("mongoose");
const schema = mongoose.schema;

const PostSchema = {

    title: String,
    description: String,
    date: Date

}

module.exports = mongoose.model("Post", PostSchema);