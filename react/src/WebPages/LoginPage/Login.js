import React from 'react';
import './Login.css';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';

function Login() {
    return (
        <div>
            <div className="banner">
                <h1 className="stonk-smarter">Stonk smarter</h1>
                <h3 className="welcome">Welcome to Wallstreet Stonks</h3>
            </div>
            <div className="login-window">
                <h2 className="login">Login</h2>
                <form className="sign-in-form" noValidate>
                    <input className="username" placeholder="Username"></input>
                    <input className="password" placeholder="Password"></input>
                    <div className="linkButton">
                      <NavLink className="linkTo" to="/">Create Account</NavLink>
                    </div>
                    <div className="linkButton">
                      <NavLink className="linkTo" to="/">Forgot Password?</NavLink>
                    </div>                
                    <button className="submit-button"> Sign In </button>{' '}
                </form>        
            </div>
        </div>
    )
}

export default Login;