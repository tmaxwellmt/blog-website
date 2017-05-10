var mongoose = require('mongoose');

var ArticleSchema = new mongoose.Schema({
  title: {required: true, type: String},
  category: String,
  content: {required: true, type: String},
  author: String,
});

ArticleSchema.methods.loadData = function(data) {

  this.title = data.title ? data.title : this.title;
  this.category = data.category ? data.category : this.category;
  this.content = data.content ? data.content : this.content;
  this.author = data.author ? data.author : this.author;
}

module.exports = mongoose.model('Article', ArticleSchema);
