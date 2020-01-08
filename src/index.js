import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import CodePage from './CodePage';
import './SASS/main.scss';
import ElectronicMusic from './ElectronicMusic';

ReactDOM.render(
  <Router>
    <Switch>
      <Route
        path='/Academic'
        render={props => <Home {...props} category={0} />}
      />
      <Route
        path='/Professional'
        render={props => <Home {...props} category={1} />}
      />
      <Route
        path='/Creative'
        render={props => <Home {...props} category={2} />}
      />
      <Route path='/code' component={CodePage} />
      <Route path='/electronic' component={ElectronicMusic} />
      <Route path='/' component={Home} />
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
