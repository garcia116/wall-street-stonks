import React from "react";
import './HomeGraph.css';


function HomeGraph() {
    return (
        <div className="home-graph-container">
            <div className="home-graph">
                <h2>Graph</h2>
            </div>
            <div className="radio-buttons">
                <label htmlFor="y">
                    <input type="radio" name="x" value="y" id="y" /> Bar Graph
                    </label>
                <label htmlFor="z">
                    <input type="radio" name="x" value="z" id="z" /> Line Graph
                    </label>
            </div>
        </div>
    )
}


export default HomeGraph;