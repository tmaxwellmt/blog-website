var express = require('express');
var Router = express.Router();
var async = require('async');
var Article =  require('../models/article')

 Router.route('/')
   .get(function(req, res) {
     Article.find(function(err, data) {
       if(err){
         res.send(err);
       } else {
         res.json({ message: 'Found Blog Articles', data });
       }
     });
   })

   .post(function(req, res){
   var newArticle = new Article();
   newArticle.loadData(req.body);
   newArticle.save(function(err, na){
     if(err){
      console.log(err)
     }else{
       res.json(na)
     }
   });
  });

Router.route('/:article_id')
  .get(function(req, res){
    Article.findById(req.params.article_id, function(err, data) {
      if (err) {
        res.send(err);
      } else {
        res.json(data);
      }
    })
  })

  .put(function (req, res) {
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
  })

  .delete(function(req, res) {
    Article.remove({_id: req.params.article_id}, function(err) {
      if (err) {
        res.send(err);
      } else {
        res.send("Article deleted");
      }
    })
  });

module.exports = Router;
