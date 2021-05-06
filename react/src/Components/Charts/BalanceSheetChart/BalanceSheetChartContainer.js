import React, { Component } from 'react';
import './BalanceSheetChartContainer.css';
import BalanceSheetChart from "../../Charts/BalanceSheetChart/BalanceSheetChart.js";


class BalanceSheetChartContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tickerSymbol: props.tickerSymbol,
            balanceSheet: [{}],
            isLoaded: false
        }
    }

    componentDidMount() {
        var sandboxMode = true
        var baseURL
        var token
        const balanceSheet = `/stock/${this.state.tickerSymbol}/balance-sheet?period=quarter&last=12&token=`

        if (sandboxMode) {
            baseURL = 'https://sandbox.iexapis.com/v1'
            token = 'Tpk_a909e54fc2ab44ac976155957da2a605'
        }
        else {
            baseURL = 'https://cloud.iexapis.com/v1'
            token = 'pk_2d87808402a3463ab504dac6eb52b540'
        }

        const balanceSheetURL = baseURL + balanceSheet + token

        fetch(balanceSheetURL)
            .then(response => response.json())
            .then(data => this.setState({ balanceSheet: data, isLoaded: true }))
    }
    render() {
        return (
            this.state.isLoaded ?
                <div className="balance-sheet-chart-container">
                    <p>Assets & Liabilities</p>
                    <div className="balance-sheet-chart">
                        <BalanceSheetChart data={this.state.balanceSheet} />
                    </div>
                </div>
                :
                <div className="balance-sheet-chart-container">
                    <p>Assets & Liabilities</p>
                    <div className="balance-sheet-chart">
                        <h1>Loading...</h1>
                    </div>
                </div>
        );
    }
}


export default BalanceSheetChartContainer;