import React from 'react';
import './App.css';
import Login from "./Components/Login/Login.js";
import Login2 from "./Components/Login/Login2.js";
import HomePage from "./WebPages/HomePage/HomePage.js";
import ResearchPageFinancials from "./WebPages/ResearchPage/ResearchPageFinancials.js";
import ResearchPageStockChart from "./WebPages/ResearchPage/ResearchPageStockChart.js";
import ResearchPageCompanyOverview from "./WebPages/ResearchPage/ResearchPageCompanyOverview.js";
import LearnPage from "./WebPages/LearnPage/LearnPage.js";
import AccountPage from "./WebPages/AccountPage/AccountPage.js";
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';

function App() {
    return (
        <div class="app">
            <Router>
                <Switch>
                    <Route path="/HomePage" exact component={HomePage} />
                    <Route path="/ResearchPageFinancials" exact component={ResearchPageFinancials} />
                    <Route path="/ResearchPageStockChart" exact component={ResearchPageStockChart} />
                    <Route path="/ResearchPageCompanyOverview" exact component={ResearchPageCompanyOverview} />
                    <Route path="/LearnPage" exact component={LearnPage} />
                    <Route path="/AccountPage" exact component={AccountPage} />
                    <Route path="/Login2" exact component={Login2} />
                </Switch>
            </Router>
        </div>
    );
}


export default App;
