import React from 'react';
import history from './utils/BrowserHistory';
import { Router } from 'react-router-dom';
import './App.scss';
import { Header, Footer, SideMenu } from './components';
import { RoutingLayout } from './router';

const App = () => {
  
  return (
    <div id="testing-adminlte">
      <Router history = {history}>
        <Header />
        <SideMenu />
        <RoutingLayout />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
