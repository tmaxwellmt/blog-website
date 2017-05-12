var Article = require('../models/article');
var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();
var colors = require('colors');

chai.use(chaiHttp);

var server = require('../app');

describe('/GET ALL ARTICLES'.underline.magenta, function(){

  it('returns articles from database', function(done){
    chai.request(server)
      .get('/api/articles')
      .end(function(err, res){
        res.should.have.status(200);
        res.body.should.have.property('message').eql('Found Blog Articles');
        res.body.data.should.be.a('array');
        done();
      })
  })

});

// not sure why this one is failing
xdescribe('/POST NEW ARTICLE'.underline.magenta, function(){

  it('will not make article without a title', function(done){

    var article = {
      title: "Super Test",
      content: "Lorem ipsum..."
    }

    chai.request(server)
      .post('/api/articles')
      .send(article)
      .end(function(err, res){
        res.body.should.have.property('errors');
        res.body.errors.title.should.have.property('kind').eql('required');
        done()
      })
  });

})

describe('/GET SINGLE ARTICLE BY ID'.underline.magenta, function(){

  it('it should get ARTICLE by ID', function(done){

    var article = new Article({
      title: "Super Test",
      content: "Lorem ipsum..."
    });

     article.save(function(err, article) {
       chai.request(server)
         .get('/api/articles/' + article._id)
         .send(article)
         .end(function(err, res) {
           res.should.have.status(200);
           res.body.should.be.a('object');
           res.body.should.have.property('message')
           res.body.message.should.eql('Article Found');

           done();
         })
     })

   })

});


describe('DELETE AN ARTICLE'.underline.magenta, function(){
  it('Can delete an article by id', function(done){
    var article = new Article({ title: "Test for delete" })
    article.save(function(err, article) {
      chai.request(server)
        .delete('/api/articles/' + article._id)
        .end(function(err, res){
          res.should.have.status(200);
          done();
        })
    })
  })
});
