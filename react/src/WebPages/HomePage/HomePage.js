import React from 'react';
import './HomePage.css';
import NavBar from "../../Components/NavBar/NavBar.js";
import HomeGraph from "../../Components/HomeGraph/HomeGraph.js";
import Gainers from "../../Components/Gainers/Gainers.js";
import Losers from "../../Components/Losers/Losers.js";
import News from "../../Components/News/News.js";
import ListOfCompanies from "../../Components/ListOfCompanies/example.js"
import Watchlist from "../../Components/Watchlist/Watchlist.js";
import SideNav from "../../Components/SideNav/SideNav.js";



function HomePage() {
    return (
        <div className="home-page">
            <NavBar />
            <SideNav />
            <div className="home-page-row-container">
                <div className="home-page-column-container">
                    <HomeGraph />
                    <div className="home-page-row-container">
                        <Gainers />
                        <Losers />
                    </div>
                    <News />
                    <ListOfCompanies />
                    
                </div>
                <Watchlist />
            </div>
        </div>
    );
}


export default HomePage;