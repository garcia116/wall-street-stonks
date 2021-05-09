import React from "react";
import logo from '../../StonksGuyIcon.png';
import './NavBar.css';

function NavBar() {
    return (
        <div className="nav-bar-container">
            <div className="nav-bar-container-item">
                    <a className="nav-bar-link" href="/HomePage">
                        <img className="nav-bar-home-icon" alt="" src={logo} />  WallStreet Stonks
                    </a>
            </div>
        </div>
    )
}

export default NavBar;