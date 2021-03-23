import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Route, NavLink, BrowserRouter } from 'react-router-dom';
import HomePage from '../../WebPages/HomePage/HomePage';
import ResearchPageFinancials from '../../WebPages/ResearchPage/ResearchPageFinancials';
import LearnPage from '../../WebPages/LearnPage/LearnPage';
import './SideNav.css'
import AccountPage from '../../WebPages/AccountPage/AccountPage';
import Login from '../../WebPages/LoginPage/Login';

class SideNav extends React.Component {
    showSettings(event) {
        event.preventDefault();
    }

    render() {
        return (
            <BrowserRouter>
                <Menu>
                    <NavLink to="/HomePage" className="menu-item">Home</NavLink>
                    <NavLink to="/ResearchPageFinancials" className="menu-item">Research</NavLink>
                    <NavLink to="/LearnPage" className="menu-item">Learn</NavLink>
                    <NavLink to="/AccountPage" className="menu-item">Account</NavLink>
                    <NavLink to="/Login" className="menu-item">Login</NavLink>
                </Menu>
                <div className="content">
                    <Route path="/HomePage" component={HomePage}/>
                    <Route path="/ResearchPageFinancials" component={ResearchPageFinancials} />
                    <Route path="/LearnPage" component={LearnPage} />
                    <Route path="/AccountPage" component={AccountPage} />
                    <Route path="/Login" component={Login} />
                </div>
            </BrowserRouter>
            )
    }
}

export default SideNav;