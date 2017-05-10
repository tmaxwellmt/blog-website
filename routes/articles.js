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

  //  .post(function(req, res){
  //  var newArticle = new Article();
  //  newArticle.loadData(req.body);
  //  newArticle.save(function(err, na){
  //    if(err){
  //     console.log(err)
  //    }else{
  //      res.json(na)
  //    }
  //  });
  // });

  // Router.route('/multiple-superHeroes')
  //  .post(function(req, res){
  //    var newHeroes = [];
  //    async.each(req.body.data,function(hero, cb) {
  //      var newArticle = new Article();
  //
  //    newArticle.loadPower(hero.superPower)
  //    newArticle.loadData(hero);
  //
  //    newArticle.save()
  //     .then(function(hero) {
  //       console.log(hero, 'EACH HERO SUCCESS');
  //       newHeroes.push(hero);
  //       cb();
  //
  //     },function(err){
  //         if(err) cb (err);
  //       });
  //   },function(err){
  //     if(err) throw err;
  //     res.json(newHeroes);
  //   });
  // });

// Router.route('/:superhero_id')
//   .get(function(req, res){
//     Article.findById(req.params.superhero_id, function(err, data) {
//       if (err) {
//         res.send(err);
//       } else {
//         res.json(data);
//       }
//     })
//   })
//
//   .put(function (req, res) {
//     Article.findById( req.params.superhero_id, function (err, hero) {
//       if (!hero) return res.status(404);
//       hero.loadPower(req.body.superPower);
//       hero.loadData(req.body);
//       hero.save(function(e) {
//         if (e) {
//           res.status(500).send(e)
//         } else {
//           res.json({ message: 'Hero updated!', hero});
//         }
//       })
//     })
//   })
//
//   .delete(function(req, res) {
//     Article.remove({_id: req.params.superhero_id}, function(err) {
//       if (err) {
//         res.send(err);
//       } else {
//         res.send("Article deleted");
//       }
//     })
//   });

module.exports = Router;
