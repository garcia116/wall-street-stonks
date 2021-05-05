import React, { Component } from 'react';
import './ResearchPageFinancials.css';
import PERatioChartContainer from "../../Components/Charts/PERatioChart/PERatioChartContainer.js";
import EPSChartContainer from "../../Components/Charts/EPSChart/EPSChartContainer.js";

class ResearchPageStats extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tickerSymbol: 'TSLA'
        }
    }

    render() {
        return (
            <div className="research-page-stats">
                <EPSChartContainer tickerSymbol={this.state.tickerSymbol} />
                <EPSChartContainer tickerSymbol={this.state.tickerSymbol} />

            </div>
        );
    }
}


export default ResearchPageStats;