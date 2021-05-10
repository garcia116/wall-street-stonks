import React, { useEffect } from 'react';
import BalanceSheetChartContainer from "../../Components/Charts/BalanceSheetChart/BalanceSheetChartContainer.js";
import CashFlowChartContainer from "../../Components/Charts/CashFlowChart/CashFlowChartContainer.js";
import IncomeStatementChartContainer from "../../Components/Charts/IncomeStatementChart/IncomeStatementChartContainer.js";
import './ResearchPageFinancials.css';
import { useState } from 'react';


const ResearchPageFinancials = React.memo(({ tickerSymbol }) => {

    const [data, setData] = useState(tickerSymbol)

    return (
        <div className="research-page-financials">
            <IncomeStatementChartContainer tickerSymbol={data} />
            <BalanceSheetChartContainer tickerSymbol={data} />
            <CashFlowChartContainer tickerSymbol={data} />
        </div>
    );
});

export default ResearchPageFinancials;