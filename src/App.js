import React, { Component } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
// import MainPage from "./components/MainPage";
import Dashboard from "./components/Dashboard";


 export default class App extends Component{

render() {
  return (
    <Router>
    <div className="App container-fluid">
          <Switch>
           <Route path="/Home">
            <Home />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Register">
            <Register />
          </Route>
          
            <Route path="/Dashboard">
            <Dashboard />
             </Route>
          
          </Switch>
    </div>
  </Router>
  );
}
}

