import React from 'react';
import ReactDOM from 'react-dom';
import {Router,
        Route,
        browserHistory,
        IndexRoute}
        from 'react-router'

import App from './App';
import {HomeContainer} from './containers'


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/Home" component={HomeContainer}/>
      <IndexRoute component={HomeContainer} />
    </Route>
  </Router>,
  document.getElementById('root')
);
