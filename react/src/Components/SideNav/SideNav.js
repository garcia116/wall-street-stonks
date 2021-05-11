import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Route, NavLink, BrowserRouter, Redirect, Switch } from 'react-router-dom';
import HomePage from '../../WebPages/HomePage/HomePage';
import ResearchPage from '../../WebPages/ResearchPage/ResearchPage';
import LearnPage from '../../WebPages/LearnPage/LearnPage';
import './SideNav.css'
import AccountPage from '../../WebPages/AccountPage/AccountPage';
import Login from '../../WebPages/LoginPage/Login';
// import SignUp from '../../WebPages/SignUpPage/SignUp';
import SignUp from '../../WebPages/SignUpPage/SignUp';
import PrivateRoute from "../PrivateRoute/PrivateRoute"


class SideNav extends React.Component {
    showSettings(event) {
        event.preventDefault();
    }

    render() {
        return (
            <BrowserRouter>
                <Menu>
                    <NavLink to="/HomePage" className="menu-item">Home</NavLink>
                    <NavLink to="/ResearchPage" className="menu-item">Research</NavLink>
                    <NavLink to="/LearnPage" className="menu-item">Learn</NavLink>
                    <NavLink to="/AccountPage" className="menu-item">Account</NavLink>
                    <NavLink to="/Login" className="menu-item">Login</NavLink>
                    {/* <NavLink to="/SignUp" className="menu-item">Sign Up</NavLink> */}
                </Menu>
                <div className="content">
                    <Redirect from="/" to="/HomePage" />
                    <Route path="/HomePage" component={HomePage} />
                    <Route path="/ResearchPage" component={ResearchPage} />
                    <Route path="/LearnPage" component={LearnPage} />
                    {/* <Route path="/AccountPage" component={AccountPage} /> */}
                    <Route path="/Login" component={Login} />
                    <Route path="/SignUp" component={SignUp} />
                    <Switch>
                        <PrivateRoute exact path="/AccountPage" component={AccountPage} />
                    </Switch>
                </div>
            </BrowserRouter>
            )
    }
}

export default SideNav;