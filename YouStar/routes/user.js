const router = require("express").Router();
const User = require("../models/user");
var bodyParser = require("body-parser");

var urlencodedParser = bodyParser.urlencoded({ extended: false });

router
  .post("/user/add", urlencodedParser, (req, res) => {
    const { user } = req.body;
    const newUser = new User();
    newUser.firstname = req.body.firstname;
    newUser.lastname = req.body.lastname;
    newUser.username = req.body.username;
    newUser.email = req.body.email;
    newUser.password = req.body.password;
    newUser.isAccountPublic = true;
    newUser.profileImageUrl = "";
    newUser.status = "";
    newUser.stars = 0;

    newUser
      .save()
      .then(() => {
        console.log("User added successfully!");
        res.redirect("/user/all");
      })
      .catch((err) => console.log(err));
  })
  .get("/user/delete/:_id", (req, res) => {
    const { _id } = req.params;
    User.deleteOne({ _id })
      .then(() => {
        console.log("User deleted Successfully!");
        res.redirect("/user/all");
      })
      .catch((err) => console.log(err));
  });

router.get("/user/all", async (req, res) => {
  const allUsers = await User.find();
  res.render("user/allUsers", { user: allUsers });
});

router.get("/register", (req, res) => {
  res.render("user/register");
});

router.get("/login", (req, res) => {
  res.render("user/login");
});

module.exports = router;