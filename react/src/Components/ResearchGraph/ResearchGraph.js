import React from "react";
import './ResearchGraph.css';

function ResearchGraph() {
    return (
        <div className="research-graph-container">
            <div className="research-graph">
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


export default ResearchGraph;