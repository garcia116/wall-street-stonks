import React, { Component } from 'react';
import BalanceSheetChartContainer from "../../Components/Charts/BalanceSheetChart/BalanceSheetChartContainer.js";
import CashFlowChartContainer from "../../Components/Charts/CashFlowChart/CashFlowChartContainer.js";
import IncomeStatementChartContainer from "../../Components/Charts/IncomeStatementChart/IncomeStatementChartContainer.js";
import './ResearchPageFinancials.css';

class ResearchPageFinancials extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tickerSymbol: 'TSLA'
        }
    }

    render() {
        return (
            <div className="research-page-financials">
                <IncomeStatementChartContainer tickerSymbol={this.state.tickerSymbol} />
                <BalanceSheetChartContainer tickerSymbol={this.state.tickerSymbol} />
                <CashFlowChartContainer tickerSymbol={this.state.tickerSymbol} />
            </div>
        );
    }
}


export default ResearchPageFinancials;