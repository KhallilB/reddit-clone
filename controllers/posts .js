Post = require("./models/Post");

module.exports = (app) => {

    app.get('/', (req, res) => {
        res.render("home");
    });
    
}