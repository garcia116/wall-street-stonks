import React from 'react';
import './App.css';
import NavBar from "./Components/NavBar/NavBar.js";
import NewsBar from "./Components/NewsBar/NewsBar.js";
import GainersBar from "./Components/GainersBar/GainersBar.js";
import LosersBar from "./Components/LosersBar/LosersBar.js";
import GraphBar from "./Components/GraphBar/GraphBar.js";


function App() {
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

export default App;
