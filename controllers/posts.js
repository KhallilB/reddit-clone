const Post = require('../models/Post');

module.exports = (app) => {

    //HOME
    app.get('/', (req, res) => {
        res.render('home');
    });

    //INDEX POSTS
    app.get('/posts', (req, res) => {
        res.render('post-index', {});
    });

    //NEW POST
    app.get('/posts/new', (req, res) => {
        res.render('post-new')
    })
}