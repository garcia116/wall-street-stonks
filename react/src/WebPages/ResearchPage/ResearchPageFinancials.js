import React, { Component } from 'react';
import BalanceSheetChartContainer from "../../Components/Charts/BalanceSheetChart/BalanceSheetChartContainer.js";
import CashFlowChartContainer from "../../Components/Charts/CashFlowChart/CashFlowChartContainer.js";
import IncomeStatementChartContainer from "../../Components/Charts/IncomeStatementChart/IncomeStatementChartContainer.js";
import './ResearchPageFinancials.css';


function ResearchPageFinancials(props) {
    const [data] = props.tickerSymbol
    console.log(data)

    return (
        <div className="research-page-financials">
            <IncomeStatementChartContainer tickerSymbol={data.tickerSymbol} />
            <BalanceSheetChartContainer tickerSymbol={data.tickerSymbol} />
            <CashFlowChartContainer tickerSymbol={data.tickerSymbol} />
        </div>
    );
}

export default ResearchPageFinancials;