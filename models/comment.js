const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var CommentSchema = new Schema({
  title: {required: true, type: String},
  content: {required: true, type: String},
});

CommentSchema.methods.loadData = function(data){
  this.title = data.title;
  this.content = data.content;
}

module.exports = mongoose.model('Comment', CommentSchema);
