import React from 'react';
import './App.css';
import Login2 from "./Components/Login/Login2.js";
import HomePage from "./WebPages/HomePage/HomePage.js";
import ResearchPageFinancials from "./WebPages/ResearchPage/ResearchPageFinancials.js";
import ResearchPageStockChart from "./WebPages/ResearchPage/ResearchPageStockChart.js";
import ResearchPageCompanyOverview from "./WebPages/ResearchPage/ResearchPageCompanyOverview.js";
import LearnPage from "./WebPages/LearnPage/LearnPage.js";
import Login from "./WebPages/LoginPage/Login.js";
import AccountPage from "./WebPages/AccountPage/AccountPage.js";
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
