import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router'
import App from './App';
import {HomeContainer, AboutContainer, ArticlesContainer, PostArticleContainer, EditArticleContainer, SingleArticleContainer} from './containers';
require('bootstrap/dist/css/bootstrap.css');

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/home" component={HomeContainer}/>
      <Route path="/about" component={AboutContainer}/>
      <Route path="/articles" component={ArticlesContainer}/>
      <Route path="/post" component={PostArticleContainer}/>
      <Route path="/edit/:article_id" component={EditArticleContainer}/>
      <Route path="/article/:article_id" component={SingleArticleContainer}/>
      <IndexRoute component={HomeContainer} />
    </Route>
  </Router>,
  document.getElementById('root')
);
