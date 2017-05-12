// blog/routes/in index.js
const express = require('express');
const ArticleRoutes = require('./articles/articles')


module.exports = (app) => {
  //each call takes 2 aurguments
  app.get('/api/articles', ArticleRoutes.getAll);
  app.get('/api/article/:articles_id', ArticleRoutes.getById);
  app.post('/api/articles', ArticleRoutes.makeNew);
  app.put('/api/article/:articles_id', ArticleRoutes.edit);
  app.delete('/api/article/:articles_id', ArticleRoutes.remove);
}
