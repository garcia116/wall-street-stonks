import React from 'react';
import './App.css';
import Login from "./Components/Login/Login.js";
import Login2 from "./Components/Login/Login2.js";
import Home from "./Components/Home/Home.js";

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className = "app-content">
                <Switch>
                
                    <Route path="/login" exact component={Login2}/>
                    <Route path="/" exact component={Home}/>
                   
                </Switch>
            </div>
        </Router>
  );
}

export default App;
