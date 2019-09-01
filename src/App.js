import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from './Home'
import CodePage from './CodePage'
import './SASS/main.scss'
import ElectronicMusic from './ElectronicMusic';

class App extends Component {
  render() {
    return (
      <Router>
      <Switch >
      <Route path="/code" component={CodePage} />
      <Route path="/electronic" component={ElectronicMusic} />
       <Route path="/:category" component={Home} />
       <Route path="/" component={Home} />
       
      </Switch>
    </Router>
    );
  }
  
}

export default App;
