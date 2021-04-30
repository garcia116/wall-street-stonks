import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import NavBar from "./Components/NavBar/NavBar.js";
import SideNav from "./Components/SideNav/SideNav.js";


function App() {
    return (
        <div className="app">
            <NavBar />
            <SideNav />
            <Router>
                <Switch>
                    <Route path="/">
                        <Redirect to="/HomePage" />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}


export default App;
