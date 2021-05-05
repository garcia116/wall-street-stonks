import React, { Component } from 'react';
import './EPSChartContainer.css';
import EPSChart from "../../Charts/EPSChart/EPSChart.js";


class EPSChartContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tickerSymbol: props.tickerSymbol,
            incomeStatement: [{}],
            keyStats: [{}]
        }
    }

    componentDidMount() {
        var sandboxMode = false
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
                <div className="eps-chart-container">
                    <p>Earnings Per Share</p>
                    <div className="eps-chart">
                        <EPSChart incomeStatement={this.state.incomeStatement} sharesOutstanding={this.state.keyStats.sharesOutstanding} />
                    </div>
                </div>
                :
                <div className="eps-chart-container">
                    <p>Earnings Per Share</p>
                    <div className="eps-chart">
                        <h1>Loading...</h1>
                    </div>
                </div>
        );
    }
}


export default EPSChartContainer;