var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var schema = new Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  // gender: { type: String, required: false },  // ovo treba biti true
  password: { type: String, required: true },
  isAccountPublic: { type: Boolean, required: false },
  profileImageUrl: { type: String, required: false },
  stars: { type: Number, required: false },
  status: { type: String, required: false },
});

module.exports = mongoose.model("User", schema);