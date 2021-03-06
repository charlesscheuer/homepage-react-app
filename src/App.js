import React, {Component} from 'react';
import {
  HashRouter as Router,
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
        <Route path="/Academic" render={(props) => <Home {...props}  category={0}/>}/>
        <Route path="/Professional" render={(props) => <Home {...props}  category={1}/>}/>
        <Route path="/Creative" render={(props) => <Home {...props}  category={2}/>}/>
        <Route path="/code" component={CodePage} />
        <Route path="/electronic" component={ElectronicMusic} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
    );
  }
  
}

export default App;
