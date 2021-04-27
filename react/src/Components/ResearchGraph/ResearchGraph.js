import React from "react";
import './ResearchGraph.css';
import IncomeStatementChart from "../Charts/IncomeStatementChart.js";
import BalanceSheetChart from "../Charts/BalanceSheetChart.js";
import PERatioChart from "../Charts/PERatioChart.js";


const ResearchGraph = (props) => {
    var display
    if (props.chartFlag === 0) {
        display = <IncomeStatementChart style="position: relative; height:10vh; width:20vw" data={props.data} />
    } else if (props.chartFlag === 1) {
        display = <BalanceSheetChart data={props.data} />
    } else if (props.chartFlag === 2) {
        display = <PERatioChart data={props.data} data2={props.data2}/>
    }
    return (
        <div className="research-graph-container">
            <div className="research-graph">
                {display}
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
    );
}


export default ResearchGraph;