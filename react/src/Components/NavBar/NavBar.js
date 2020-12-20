import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import logo from '../../StonksGuyIcon.png';
import './NavBar.css';

function NavBar() {
    return (
        <div class="nav-bar-container">
            <div class="nav-bar-container-item">
                <div class="nav-bar-home">
                    <a class="nav-bar-link" href="/HomePage">
                        <img alt="" src={logo} class="nav-bar-home-icon" /> WallStreet Stonks
                    </a>
                </div>
            </div>
            <div class="nav-bar-container-item">
                <div class="nav-bar-search-bar">
                    Search Bar
                </div>
            </div>
            <div class="nav-bar-container-item">
                <div class="nav-bar-options-container">
                    <div class="nav-bar-options-container-item">
                    </div>
                    <div class="nav-bar-options-container-item">
                    </div>
                    <div class="nav-bar-options-container-item">
                    </div>
                    <div class="nav-bar-options-container-item">
                    </div>
                    <div class="nav-bar-options-container-item">
                    </div>
                    <div class="nav-bar-options-container-item">
                        <a class="nav-bar-link" href="/ResearchPageFinancials">Research</a>
                    </div>
                    <div class="nav-bar-options-container-item">
                        <a class="nav-bar-link" href="/LearnPage">Learn</a>
                    </div>
                    <div class="nav-bar-options-container-item">
                        <a class="nav-bar-link" href="/AccountPage">Account</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar;