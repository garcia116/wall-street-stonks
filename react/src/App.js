import React from 'react';
import './App.css';
import NavBar from "./Components/NavBar/NavBar.js";
import NewsBar from "./Components/NewsBar/NewsBar.js";
import GainersBar from "./Components/GainersBar/GainersBar.js";
import LosersBar from "./Components/LosersBar/LosersBar.js";
import GraphBar from "./Components/GraphBar/GraphBar.js";
import Login from "./Components/Login/Login.js";
import Login2 from "./Components/Login/Login2.js";

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className = "app-content">
                <Switch>



                    
                
                    <Route path="/login" exact component={Login2}/>
                   
 
                    <NavBar/>
                    <NewsBar />
                    <GainersBar/>
                    <LosersBar />
                    <GraphBar />
                </Switch>
            </div>
        </Router>
  );
}

export default App;
