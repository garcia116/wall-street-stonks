
import React from 'react';
import './Login.css';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';

export default function Login() {
    
    return (
        <div>
            <div className="banner">
                <h1 className="stonk-smarter">stonk smarter</h1>
                <h3 className="welcome">   welcome to Wallstreet Stonks</h3>
            </div>
            <div className="login-window">
                <h2 className="login">Login</h2>
                <form className="sign-in-form" noValidate>
                    <input className="username"></input>
                    <input className="password" ></input>
                    <div className="linkButton">
                      <NavLink className="linkTo" to="/">Create Account</NavLink>
                    </div>
                    <div className="linkButton">
                      <NavLink className="linkTo" to="/">Forgot Password?</NavLink>
                    </div>                
                    <button
                               
                        className="submit-button"
                    >Sign In</button>{' '}
                </form>        
            </div>
        </div>
    )
}