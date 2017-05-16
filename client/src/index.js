import React from 'react';
import ReactDOM from 'react-dom';
import {Router,
        Route,
        browserHistory,
        IndexRoute}
        from 'react-router'

import App from './App';
import {HomeContainer} from './containers'
import {AboutContainer} from './containers'
import {ArticlesContainer} from './containers'


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/Home" component={HomeContainer}/>
      <IndexRoute component={HomeContainer} />
      <Route path="/About" component={AboutContainer}/>
      <Route path="/Articles" component={ArticlesContainer}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
