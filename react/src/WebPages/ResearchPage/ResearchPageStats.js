import React, { Component } from 'react';
import './ResearchPageFinancials.css';
import EPSChartContainer from "../../Components/Charts/EPSChart/EPSChartContainer.js";

class ResearchPageStats extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tickerSymbol: 'TSLA',
            incomeStatement: [{}],
            keyStats: [{}],
            isLoaded1: false,
            isLoaded2: false
        }
    }

    componentDidMount() {
        var sandboxMode = true
        var baseURL
        var token
        const keyStats = `/stock/${this.state.tickerSymbol}/stats/companyname?&token=`
        const incomeStatement = `/stock/${this.state.tickerSymbol}/income?period=quarter&last=12&token=`

        if (sandboxMode) {
            baseURL = 'https://sandbox.iexapis.com/v1'
            token = 'Tpk_a909e54fc2ab44ac976155957da2a605'
        }
        else {
            baseURL = 'https://cloud.iexapis.com/v1'
            token = 'pk_2d87808402a3463ab504dac6eb52b540'
        }

        const keyStatsURL = baseURL + keyStats + token
        const incomeStatementURL = baseURL + incomeStatement + token

        fetch(keyStatsURL)
            .then(response => response.json())
            .then(data => this.setState({ keyStats: data, isLoaded1: true }))
        fetch(incomeStatementURL)
            .then(response => response.json())
            .then(data => this.setState({ incomeStatement: data, isLoaded2: true }))
    }

    render() {
        return (
            this.state.isLoaded1 && this.state.isLoaded2 ?
                <div className="research-page-stats">
                    <EPSChartContainer incomeStatement={this.state.incomeStatement} sharesOutstanding={this.state.keyStats.sharesOutstanding} />
                </div>
                :
                <div className="research-page-stats">
                    <h1>Loading...</h1>
                </div>
        );
    }
}


export default ResearchPageStats;