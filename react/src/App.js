import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import NavBar from "./Components/NavBar/NavBar.js";
import SideNav from "./Components/SideNav/SideNav.js";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

// implementing Redux for user auth
import { Provider } from "react-redux";
import store from "./store";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
    // Set auth token header auth
    const token = localStorage.jwtToken;
    setAuthToken(token);
    // Decode token and get user info and exp
    const decoded = jwt_decode(token);
    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded));
  // Check for expired token
    const currentTime = Date.now() / 1000; // to get in milliseconds
    if (decoded.exp < currentTime) {
      // Logout user
      store.dispatch(logoutUser());
      // Redirect to login
      window.location.href = "./login";
    }
}
  

function App() {
    return (
        <Provider store={store}>
            <div className="app">
                <NavBar />
                <SideNav />
                <Router>
                    <Switch>
                        <Route path="/"> 
                            <Redirect to="/HomePage" />
                        </Route>
                    </Switch>
                </Router>
            </div>
        </Provider>
        
            // <div className="app">
            //     <NavBar />
            //     <SideNav />
            //     <Router>
            //         <Switch>
            //             <Route path="/"> 
            //                 <Redirect to="/HomePage" />
            //             </Route>
            //         </Switch>
            //     </Router>
            // </div>
        
    );
}


export default App;
