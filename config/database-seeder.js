const faker = require('faker');
const Article = require('../models/article');

module.exports = () => {

  Article.remove(err => {
    if(err) {
      console.error(err, "ERROR DELETING ARTICLES")
    } else {
      console.log("OLD ARTICLES DELETED....LOOK FOR NEW ARTICLES");
    }
  })

  for (var i = 0; i < 20; i++) {
    var newArticle = new Article({
    title : faker.random.words(),
    category : faker.random.word(),
    author : faker.name.firstName() + ' ' + faker.name.lastName(),
    content : faker.lorem.paragraphs(),
    img : faker.image.image(),
  });

  newArticle.save();
  }
}
