var async = require('async');
var Article =  require('../../models/article')

exports.getAll = (req, res) => {
   Article.find(function(err, data) {
     if(err){
       res.send(err);
     } else {
       res.json({ message: 'Found Blog Articles', data });
     }
   });
 }

exports.makeNew = (req, res) => {
 var newArticle = new Article();
 newArticle.loadData(req.body);
 newArticle.save(function(err, na){
   if(err){
    console.log(err)
   }else{
     res.json(na)
   }
 });
}

exports.getById = (req, res) => {
  Article.findById(req.params.article_id, function(err, data) {
    if (err) {
      res.send(err);
    } else {
      res.json(data);
    }
  })
}

exports.edit = (req, res) => {
  Article.findById( req.params.article_id, function (err, article) {
    if (!article) return res.status(404);
    article.loadData(req.body);
    article.save(function(e) {
      if (e) {
        res.status(500).send(e)
      } else {
        res.json({ message: 'Article updated!', article});
      }
    })
  })
}

exports.remove = (req, res) => {
  Article.remove({_id: req.params.article_id}, function(err) {
    if (err) {
      res.send(err);
    } else {
      res.send("Article deleted");
    }
  })
}
