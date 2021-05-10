import React from 'react';
import './EPSChartContainer.css';
import EPSChart from "../../Charts/EPSChart/EPSChart.js";
import { useState } from 'react';


function EPSChartContainer({ incomeStatement, sharesOutstanding }) {
    const [income, setIncome] = useState(incomeStatement);
    const [shares, setShares] = useState(sharesOutstanding);

    return (
            <div className="eps-chart">
                <h2>Earnings Per Share</h2>
                <EPSChart incomeStatement={income} sharesOutstanding={shares} />
            </div>
    );

}



export default EPSChartContainer;