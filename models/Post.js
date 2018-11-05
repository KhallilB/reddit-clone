const mongoose = require("mongoose");
const schema = mongoose.schema;

const postSchema = {

    title: String,
    description: String,
    date: Date

}

module.exports = mongoose.model("Post", postSchema);