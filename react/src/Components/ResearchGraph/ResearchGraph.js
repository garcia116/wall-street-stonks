import React from "react";
import './ResearchGraph.css';
import IncomeStatementChart from "../Charts/IncomeStatementChart.js";
import BalanceSheetChart from "../Charts/BalanceSheetChart.js";
import PERatioChart from "../Charts/PERatioChart.js";


const ResearchGraph = (props) => {
    var display
    if (props.chartFlag === 0) {
        display = <IncomeStatementChart data={props.data} />
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
        </div>
    );
}


export default ResearchGraph;