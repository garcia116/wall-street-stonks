import {React, useState} from 'react';
import './Login.css';
import { NavLink } from 'react-router-dom';
import axios from "axios";

function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log("handleSumit triggered!");

        // create object with username and password
        // send to axios? 
        // authenticate?
        const userData = {
            user: username,
            pass: password,
        }

        axios
            .post("/api/users/login", userData)
            .then(res => {
                // save login to local storage
                // set token to local storage
                // setAuthToken(token);
                console.log("User logged in")
                console.log(userData);
            })
            


    }

    return (
        <div className="login-page">
            <div className="banner">
                <h1 className="stonk-smarter">Stonk smarter</h1>
                <h2 className="welcome">Welcome to Wallstreet Stonks</h2>
            </div>
            <div className="login-window">
                <h2 className="login">Login</h2>
                <form className="sign-in-form" onSubmit={handleSubmit} noValidate>
                    <input className="username" placeholder="Username" onChange={e => setUsername(e.target.value)}/>
                    <input className="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
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