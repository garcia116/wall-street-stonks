import React, { Component } from 'react';
import './ResearchPageFinancials.css';
import DividendsChartContainer from "../../Components/Charts/DividendsChart/DividendsChartContainer.js";

class ResearchPageDividends extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tickerSymbol: 'TSLA'
        }
    }

    render() {
        return (
            <div className="research-page-dividends">
                <DividendsChartContainer tickerSymbol={this.state.tickerSymbol} />
            </div>
        );
    }
}


export default ResearchPageDividends;