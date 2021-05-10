import React, { Component } from 'react';
import NotStonksGuy from '../../../NotStocksGuy.png';
import './DividendsChartContainer.css';
import DividendsChart from "../../Charts/DividendsChart/DividendsChart.js";


class DividendsChartContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tickerSymbol: props.tickerSymbol,
            dividends: [{}],
            isLoaded: false
        }
    }

    componentDidMount() {
        var sandboxMode = true
        var baseURL
        var token
        const dividends = `/stock/${this.state.tickerSymbol}/dividends/5y?period=quarter&last=12&token=`

        if (sandboxMode) {
            baseURL = 'https://sandbox.iexapis.com/v1'
            token = 'Tpk_a909e54fc2ab44ac976155957da2a605'
        }
        else {
            baseURL = 'https://cloud.iexapis.com/v1'
            token = 'pk_2d87808402a3463ab504dac6eb52b540'
        }

        const dividendsURL = baseURL + dividends + token

        fetch(dividendsURL)
            .then(response => response.json())
            .then(data => this.setState({ dividends: data, isLoaded: true }))
    }
    render() {
        return (
            this.state.isLoaded ?
                this.state.dividends.length !== 0 ? 
                    <div className="dividends-chart">
                        <h2>Dividends</h2>
                        <DividendsChart dividends={this.state.dividends} />
                    </div>
                    : 
                    <div className="dividends-chart">
                        <h1>Dividends Unavailable</h1>
                        <img className="not-stonks-guy" alt="" src={NotStonksGuy} />
                    </div>
                :
                <div className="dividends-chart">
                    <h1>Loading...</h1>
                </div>
        );
    }
}


export default DividendsChartContainer;