var mongoose = require('mongoose');
require('dotenv').config()


module.exports = () => {
  if (process.env.NODE_ENV === 'test' ) {
    mongoose.connect("mongodb://localhost/test-blog-website");
    console.log("📁 📂 🗄 TEST DATABASE OPERATIONAL 🗄 📂 📁");
  } else {
    mongoose.connect("mongodb://localhost/blog-website")
    console.log("📁 📂 🗄 DEV DATABASE OPERATIONAL 🗄 📂 📁");
  }

}
