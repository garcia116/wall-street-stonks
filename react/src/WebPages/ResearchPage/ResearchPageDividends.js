import React, { useState } from 'react';
import './ResearchPageDividends.css';
import DividendsChartContainer from "../../Components/Charts/DividendsChart/DividendsChartContainer.js";

function ResearchPageDividends({ tickerSymbol }) {
    const [ticker] = useState(tickerSymbol)

    return (
        <div className="research-page-dividends">
            <DividendsChartContainer tickerSymbol={ticker} />
        </div>
    );

}

export default ResearchPageDividends;