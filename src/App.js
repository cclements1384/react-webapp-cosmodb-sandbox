import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from "./Home";
import { Admin } from "./Admin";
import { Layout } from './Components/Layout';

function App() {
  return (
    <React.Fragment>
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/admin" component={Admin}></Route>
          </Switch>
        </Router>
      </Layout>
   
    </React.Fragment>
  );
}

export default App;
