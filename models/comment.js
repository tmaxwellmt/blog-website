const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var CommentSchema = new Schema({
  content: {required: true, type: String},
});

CommentSchema.methods.loadData = function(data){
  this.content = data.content;
}

module.exports = mongoose.model('Comment', CommentSchema);
