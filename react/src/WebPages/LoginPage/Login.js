import {React, Component} from 'react';
import './Login.css';
import { NavLink } from 'react-router-dom';
import axios from "axios";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            errors: {}
        };
    }

    componentDidMount() {
        // If logged in and user navigates to Login page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
          this.props.history.push("/AccountPage");
        }
      }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
          this.props.history.push("/HomePage"); // push user to dashboard when they login
        }
        if (nextProps.errors) {
          this.setState({
            errors: nextProps.errors
          });
        }
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value});
    }

    onSubmit = e => {
        e.preventDefault();

        const userData = {
            email: this.state.email,
            password: this.state.password
        };

        this.props.loginUser(userData);
    }

    render() {
        const { errors } = this.state;
        return (
            <div>
                <div className="banner">
                    <h1 className="stonk-smarter">Stonk smarter</h1>
                    <h2 className="welcome">Welcome to Wallstreet Stonks</h2>
                </div>
                <div className="login-window">
                    <h2 className="login">Log In</h2>
                    <form noValidate onSubmit={this.onSubmit}>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input
                            onChange={this.onChange}
                            value={this.state.email}
                            error={errors.email}
                            id="email"
                            type="email"
                            className={classnames("", {
                                invalid: errors.email || errors.emailnotfound
                            })}
                        />
                        <span className="red-text">
                            {errors.email}
                            {errors.emailnotfound}
                        </span>
                        
                        
                    </div>
                    <div className="input-field">
                        
                        <label htmlFor="password">Password</label>
                        <input
                        onChange={this.onChange}
                        value={this.state.password}
                        error={errors.password}
                        id="password"
                        type="password"
                        className={classnames("", {
                            invalid: errors.password || errors.passwordincorrect
                        })}
                        />
                    </div>
                    <div className="submit-button-div">
                        <button                        
                            type="submit"
                            className="submit-button"
                        >
                        Submit
                        </button>
                    </div>
                    </form>
                    <p className="grey-text text-darken-1">
                        Don't have an account? <Link to="/SignUp">Register</Link>
                    </p>
                </div>
                
            </div>
        )}
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};
  
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { loginUser }
)(Login);