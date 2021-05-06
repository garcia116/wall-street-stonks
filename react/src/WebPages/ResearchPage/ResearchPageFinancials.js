import React from 'react';
import BalanceSheetChartContainer from "../../Components/Charts/BalanceSheetChart/BalanceSheetChartContainer.js";
import CashFlowChartContainer from "../../Components/Charts/CashFlowChart/CashFlowChartContainer.js";
import IncomeStatementChartContainer from "../../Components/Charts/IncomeStatementChart/IncomeStatementChartContainer.js";
import './ResearchPageFinancials.css';


function ResearchPageFinancials(props) {
    var data = props.tickerSymbol
    console.log(data)
    if(data === "") {
        data = "MSFT"
    }

    return (
        <div className="research-page-financials">
            <IncomeStatementChartContainer tickerSymbol={data} />
            <BalanceSheetChartContainer tickerSymbol={data} />
            <CashFlowChartContainer tickerSymbol={data} />
        </div>
    );
}

export default ResearchPageFinancials;