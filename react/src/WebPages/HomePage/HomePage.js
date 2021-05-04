import React from 'react';
import './HomePage.css';
import HomeGraph from "../../Components/HomeGraph/HomeGraph.js";
import Gainers from "../../Components/Gainers/Gainers.js";
import Losers from "../../Components/Losers/Losers.js";
import News from "../../Components/News/News.js";
import ListOfCompanies from "../../Components/ListOfCompanies/ListOfCompanies.js"
import Watchlist from "../../Components/Watchlist/Watchlist.js";



function HomePage() {
    console.log(window.location.pathname);
    return (

        <div className="home-page">

            <div className="home-banner">
                <h1 className="stonk-smarter">Home</h1>
                <h3 className="welcome">Wallstreet Stonks</h3>
            </div>
            <div className="home-page-row-container">
                <News />
                <div className="home-page-column-container">
                    <HomeGraph />
                    <div className="home-page-row-container">
                        <Gainers />
                        <Losers />
                    </div>
                    <ListOfCompanies />
                </div>
                <Watchlist />
            </div>
        </div>
    );
}

export default HomePage;