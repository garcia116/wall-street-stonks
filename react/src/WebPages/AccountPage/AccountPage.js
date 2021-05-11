import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import drawing from "../../stonks-drawn.png"
class AccountPage extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
render() {
    const { user } = this.props.auth;
return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        
          
            <h4>
              <b style={{color: 'black'}}> Welcome back, {user.name.split(" ")[0]}</b> 
              <p className="info">
                <span style={{ fontFamily: 'Lato', color: "black" }}>We're happy to know you've been stonking smarter.</span>
              </p>
            </h4>
            <img src={drawing}></img>
            




            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem",
                
              }}
              onClick={this.onLogoutClick}
              className="logout-button"
            >
              Logout
            </button>
          
        
      </div>
    );
  }
}
AccountPage.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(AccountPage);