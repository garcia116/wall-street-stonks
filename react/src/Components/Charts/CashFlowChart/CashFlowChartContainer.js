import React, { Component } from 'react';
import './CashFlowChartContainer.css';
import CashFlowChart from "../../Charts/CashFlowChart/CashFlowChart.js";


class CashFlowChartContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tickerSymbol: props.tickerSymbol,
            cashFlow: [{}],
            isLoaded: false
        }
    }

    componentDidMount() {
        var sandboxMode = true
        var baseURL
        var token

        const cashFlow = `/stock/${this.state.tickerSymbol}/cash-flow?period=quarter&last=12&token=`

        if (sandboxMode) {
            baseURL = 'https://sandbox.iexapis.com/v1'
            token = 'Tpk_a909e54fc2ab44ac976155957da2a605'
        }
        else {
            baseURL = 'https://cloud.iexapis.com/v1'
            token = 'pk_2d87808402a3463ab504dac6eb52b540'
        }

        const cashFlowURL = baseURL + cashFlow + token

        fetch(cashFlowURL)
            .then(response => response.json())
            .then(data => this.setState({ cashFlow: data, isLoaded: true }))

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
            this.state.isLoaded ?
                <div className="cash-flow-chart-container">
                    <p>Cash Flow</p>
                    <div className="cash-flow-chart">
                        <CashFlowChart cashFlow={this.state.cashFlow} />
                    </div>
                </div>
                :
                <div className="cash-flow-chart-container">
                    <p>Cash Flow</p>
                    <div className="cash-flow-chart">
                        <h1>Loading...</h1>
                    </div>
                </div>
        );
    }
}


export default CashFlowChartContainer;