import React from 'react';
import NavBar from "../NavBar/NavBar.js";
import NewsBar from "../NewsBar/NewsBar.js";
import GainersBar from "../GainersBar/GainersBar.js";
import LosersBar from "../LosersBar/LosersBar.js";
import GraphBar from "../GraphBar/GraphBar.js";


function Home() {
    return (
        <div className = "app-content">
                 
 
        <NavBar/>
        <NewsBar />
        <GainersBar/>
        <LosersBar />
        <GraphBar />
                
        </div>
    );
  }
  
  export default Home;