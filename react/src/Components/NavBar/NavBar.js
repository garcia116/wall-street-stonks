import React from "react";
import { Component } from "react";
import logo from '../../StonksGuyIcon.png';
import './NavBar.css';
import { connect } from "react-redux";
import PropTypes from "prop-types";

class NavBar extends Component {
    
    render() {
        return (
            <div className="nav-bar-container">
                
                <div className="nav-bar-container-item"></div>
                <div className="nav-bar-container-item">
                    
                        <a className="nav-bar-link" href="/HomePage">
                            <img className="nav-bar-home-icon" alt="" src={logo} />  WallStreet Stonks
                        </a>
                </div>

                <div className="nav-bar-container-item">
                    <h2 className="welcome-message">
                        {(this.props.auth.isAuthenticated)? 
                        `Hi, ${this.props.auth.user.name.split(" ")[0]}` 
                        : "Welcome!" }
                    </h2>
                </div>
            </div>
        )
    }
    
}



NavBar.propTypes = {
    
    auth: PropTypes.object.isRequired
  };
  const mapStateToProps = state => ({
    auth: state.auth
  });
  export default connect(
    mapStateToProps
  )(NavBar);
