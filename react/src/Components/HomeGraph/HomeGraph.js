import React from "react";
import './HomeGraph.css';


function HomeGraph() {
    return (
        <div className="home-graph-container">
            <div className="home-graph">
                <h2>Graph</h2>
            </div>
            <div class="radio-buttons">
                <label for="y">
                    <input type="radio" name="x" value="y" id="y" /> Bar Graph
                    </label>
                <label for="z">
                    <input type="radio" name="x" value="z" id="z" /> Line Graph
                    </label>
            </div>
        </div>
    )
}

export default HomeGraph;