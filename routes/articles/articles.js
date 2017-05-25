var async = require('async');
var Article =  require('../../models/article');
var Comment = require('../../models/comment');

exports.getAll = (req, res) => {
   Article.find()
   .populate('comments')
   .exec((err, data) => {
      if(err) throw err;
      res.send({data})
    })
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
  })
}

exports.getById = (req, res) => {
   Article.findById(req.params.article_id)
   .populate('comments')
   .exec((err, data) => {
      if (err) throw err;
       res.send(data);
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

exports.makeComment = (req, res) => {
  Article.findById(req.params.article_id, (err, article) => {
      if(err) throw err;
      const newComment = new Comment();
      newComment.loadData(req.body);
      newComment.save((err, savedComment) => {
        if (err) throw err;
        article.comments.push(savedComment);
        article.save((err, savedArticle) => {
          if(err) throw err;
          res.send({data: savedArticle})
        })
      })
    })
  }
