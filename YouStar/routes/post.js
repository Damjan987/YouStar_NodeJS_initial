const router = require('express').Router();
const Post = require('../models/post');
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.post("/add/post", urlencodedParser, (req, res) => {
    const { post } = req.body;
    const newPost = new Post();
    newPost.description = req.body.description;

    newPost.save().then(() => {
        console.log("Post added successfully!");
        res.redirect("/");
    })
    .catch((err) => console.log(err));
})
.get("/delete/post/:_id", (req, res) => {
    const {_id} = req.params;
    Post.deleteOne({_id})
    .then(() => {
        console.log("Post deleted Successfully!");
        res.redirect("/");
    })
    .catch((err) => console.log(err));
});

router.get("/postFeed", async(req, res) => {
    const allPosts = await Post.find();
    res.render("postFeed", { post: allPosts });
});

module.exports = router;