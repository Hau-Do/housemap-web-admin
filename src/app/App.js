import React, { Component } from 'react';
import './App.scss';
import history from './utils/BrowserHistory';
import { Router, Route, Switch } from 'react-router-dom';
import MyProfile from './modules/MyProfile/MyProfile';
import MyJobs from './modules/MyJobs/MyJobs';
import MyCVs from './modules/MyCVs/MyCVs';
import About from './components/About/About';

// const Home = lazy(() => import('./modules/common/Home/Home'));
// const About = lazy(() => import('./modules/common/About/About'));

class App extends Component {

  render() {
    return (
      <Router history = {history}>
        <Switch>
          <Route exact path="/" component={MyProfile}/>
          <Route path="/my-profile" component={MyProfile}/>
          <Route path="/my-jobs" component={MyJobs}/>
          <Route path="/my-cvs" component={MyCVs}/>
          <Route path="/about" component={About}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
