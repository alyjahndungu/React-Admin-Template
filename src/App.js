import React, { Component } from 'react';
import './App.css';
import {createMuiTheme} from '@material-ui/core';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import PatientAccountPage from "./components/PatientAccountPage";
import Dashboard from "./components/Dashboard";
import MainPage from "./components/MainPage"; 
import TokenValidation from "./components/TokenValidation";
 



 export default class App extends Component{

render() {
  return (
    <Router>
    <div className="App container-fluid">

          <Switch>



          <Route path="/TokenValidation">
              <TokenValidation />
             </Route>
             <Route path="/MainPage">
              <MainPage />
             </Route>
          
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
          
             <Route path="/PatientAccountPage">
               <PatientAccountPage />
             </Route>

            <Route path="/">
               <MainPage />
             </Route>

        
            </Switch>
    </div>
  </Router>
  );
}
}

