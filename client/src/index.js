import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router'
import App from './App';
import {HomeContainer, AboutContainer, ArticlesContainer, PostArticleContainer, EditArticleContainer} from './containers';
require('bootstrap/dist/css/bootstrap.css');

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/home" component={HomeContainer}/>
      <Route path="/about" component={AboutContainer}/>
      <Route path="/articles" component={ArticlesContainer}/>
      <Route path="/post" component={PostArticleContainer}/>
      <Route path="/edit/:article_id" component={EditArticleContainer}/>
      <IndexRoute component={HomeContainer} />
    </Route>
  </Router>,
  document.getElementById('root')
);
