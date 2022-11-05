const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

mongoose.connect("mongodb://localhost/youstar", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.urlencoded({ extended: true }));
// app.use(express.static("public"));
app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine", "ejs");

app.use(require("./routes/index"));
app.use(require("./routes/user"));
app.use(require("./routes/post"));

app.listen(3000, () => console.log("Server started of port 3000"));