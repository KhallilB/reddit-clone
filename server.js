//DEPENDENCIES
const mongoose = require("mongoose");
const express = require("express");
const exphbs = require("express-handlebars");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");

const app = express();

app.use(methodOverride('_method'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({ extended: true }));

//DATABASE
mongoose.connect("mongodb://localhost/reddit-clone", { useNewUrlParser: true });

module.exports = (app);

//LISTENING
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("WORKING!")
})