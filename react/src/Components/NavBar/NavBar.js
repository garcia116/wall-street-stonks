import React from "react";
import logo from '../../StonksGuyIcon.png';
import './NavBar.css';

function NavBar() {
    return (
        <div className="nav-bar-container">
            <div className="nav-bar-container-item">
                <div className="nav-bar-home">
                    <a className="nav-bar-link" href="/HomePage">
                        <img alt="" src={logo} className="nav-bar-home-icon" /> WallStreet Stonks
                    </a>
                </div>
            </div>
            
            <div className="nav-bar-container-item">
                <div className="nav-bar-options-container">
                    <div className="nav-bar-options-container-item">
                    </div>
                    <div className="nav-bar-options-container-item">
                    </div>
                    <div className="nav-bar-options-container-item">
                    </div>
                    <div className="nav-bar-options-container-item">
                    </div>
                    <div className="nav-bar-options-container-item">
                    </div>
                    <div className="nav-bar-options-container-item">
                        <a className="nav-bar-link" href="/AccountPage">Account</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar;