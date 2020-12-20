import React from 'react';
import './HomePage.css';
import Gainers from "../../Components/Gainers/Gainers.js";
import HomeGraph from "../../Components/HomeGraph/HomeGraph.js";
import Losers from "../../Components/Losers/Losers.js";
import NavBar from "../../Components/NavBar/NavBar.js";
import News from "../../Components/News/News.js";
import Watchlist from "../../Components/Watchlist/Watchlist.js";


function HomePage() {
    return (
        <div className="home-page">
            <NavBar />
            <div className="home-page-row-container">
                <div className="home-page-column-container">
                    <HomeGraph />
                    <div className="home-page-row-container">
                        <Gainers />
                        <Losers />
                    </div>
                    <News/>
                </div>
                <Watchlist />
            </div>
        </div>
    );
}


export default HomePage;