import React from 'react';
import history from './utils/BrowserHistory';
import { Router, Route, Switch } from 'react-router-dom';
import { UserList } from './modules/UserManagement';
import { ProjectList } from './modules/ProjectManagement';
import './App.scss';
import { Header, Footer, SideMenu } from './components';
import Content from './Content';

const App = () => {

  return (
    // <Router history = {history}>
    //   <Switch>
    //     <Route exact path="/" component={UserList}/>
    //     <Route path="/user-management" component={UserList}/>
    //     <Route path="/project-management" component={ProjectList}/>
    //   </Switch>
    // </Router>
    <div id="testing-adminlte">
      <Header />
      <SideMenu />
      <Footer />
    </div>
  );
};

export default App;
