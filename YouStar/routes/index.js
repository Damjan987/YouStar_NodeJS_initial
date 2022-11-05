const router = require('express').Router();
const Post = require("../models/post");

router.get("/", async(req, res) => {
    const allPosts = await Post.find();
    res.render("index", {post: allPosts});
});

module.exports = router;