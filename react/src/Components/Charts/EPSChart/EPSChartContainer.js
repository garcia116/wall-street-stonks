import React from 'react';
import './EPSChartContainer.css';
import EPSChart from "../../Charts/EPSChart/EPSChart.js";
import { useState } from 'react';


function EPSChartContainer({ incomeStatement, sharesOutstanding }) {
    const [income, setIncome] = useState(incomeStatement);
    const [shares, setShares] = useState(sharesOutstanding);

    return (
        <div className="eps-chart-container">
            <p>Earnings Per Share</p>
            <div className="eps-chart">
                <EPSChart incomeStatement={income} sharesOutstanding={shares} />
            </div>
        </div>
    );

}



export default EPSChartContainer;