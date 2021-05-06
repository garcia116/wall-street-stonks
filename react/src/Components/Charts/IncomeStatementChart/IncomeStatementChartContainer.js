import React, { Component } from 'react';
import './IncomeStatementChartContainer.css';
import IncomeStatementChart from "../../Charts/IncomeStatementChart/IncomeStatementChart.js";


class IncomeStatementChartContainer extends Component {
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
        function sleep(milliseconds) {
            const date = Date.now();
            let currentDate = null;
            do {
                currentDate = Date.now();
            } while (currentDate - date < milliseconds);
        }
        sleep(75)
    }

    render() {
        return (
            this.state.isLoaded?
                <div className="income-statement-chart-container">
                    <p>Revenue, Operating Expenses, & Income</p>
                    <div className="income-statement-chart">
                        <IncomeStatementChart data={this.state.incomeStatement} />
                    </div>
                </div>
                :
                <div className="income-statement-chart-container">
                    <p>Cash Flow</p>
                    <div className="income-statement-chart">
                        <h1>Loading...</h1>
                    </div>
                </div>
        );
    }
}


export default IncomeStatementChartContainer;