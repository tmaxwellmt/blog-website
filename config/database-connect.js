var mongoose = require('mongoose');

module.exports = () => {
  mongoose.connect("mongodb://localhost/blog-website");
  console.log("Database running");
}
