import React, { Component } from 'react';
import './PERatioChartContainer.css';
import PERatioChart from "../../Charts/PERatioChart/PERatioChart.js";


class PERatioChartContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tickerSymbol: props.tickerSymbol,
            incomeStatement: [{}],
            isLoaded: false
        }
    }

    componentDidMount() {
        var sandboxMode = true
        var baseURL
        var token
        const incomeStatement = `/stock/${this.state.tickerSymbol}/income?period=quarter&last=12&token=`

        if (sandboxMode) {
            baseURL = 'https://sandbox.iexapis.com/v1'
            token = 'Tpk_a909e54fc2ab44ac976155957da2a605'
        }
        else {
            baseURL = 'https://cloud.iexapis.com/v1'
            token = 'pk_2d87808402a3463ab504dac6eb52b540'
        }

        const incomeStatementURL = baseURL + incomeStatement + token

        fetch(incomeStatementURL)
            .then(response => response.json())
            .then(data => this.setState({ incomeStatement: data, isLoaded: true }))
    }
    render() {
        return (
            this.state.isLoaded ?
                <div className="pe-ratio-chart-container">
                    <p>PE Ratios</p>
                    <div className="pe-ratio-chart">
                        <PERatioChart data={this.state.incomeStatement} />
                    </div>
                </div>
                : <div>
                    <div className="pe-ratio-chart-container">
                        <div className="pe-ratio-chart">
                            <h1>Loading...</h1>
                        </div>
                    </div>
                </div>
        );
    }
}


export default PERatioChartContainer;