import React, { Component } from 'react';
import './HomeChartContainer.css';
import HomeChart from './HomeChart.js';


class HomeGraph extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tickerSymbol: 'SPY',
            prices: [{}],
            isLoaded: false
        }
    }

    componentDidMount() {
        var sandboxMode = true
        var baseURL
        var token
        var range = '5y'
        const prices = `/stock/${this.state.tickerSymbol}/chart/${range}/?token=`

        if (sandboxMode) {
            baseURL = 'https://sandbox.iexapis.com/v1'
            token = 'Tpk_a909e54fc2ab44ac976155957da2a605'
        }
        else {
            baseURL = 'https://cloud.iexapis.com/v1'
            token = 'pk_2d87808402a3463ab504dac6eb52b540'
        }

        const pricesURL = baseURL + prices + token

        fetch(pricesURL)
            .then(response => response.json())
            .then(data => this.setState({ prices: data, isLoaded: true }))

    }
    render() {
        return (
            this.state.isLoaded ?
                <div className="home-chart-container">
                    <div className="home-chart">
                        <HomeChart data={this.state.prices}/>
                    </div>
                </div>
                :
                <div>
                    <div className="home-chart-container">
                        <div className="home-chart">
                            <h1>Loading...</h1>
                        </div>
                    </div>
                </div>
        );
    }
}


export default HomeGraph;