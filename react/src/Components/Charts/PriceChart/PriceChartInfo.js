import React, { Component } from 'react';
import './PriceChartInfo.css';

class PriceChartInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            keyStats: props.keyStats,
            isLoaded: false
        }
    }

    componentDidMount() {
        /*
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
            */
    }
    render() {
        return (
            <div className="price-chart-info-container">
                <div className="price-chart">
                    <div className="price-chart-info-item-row">
                        <div className="price-chart-info-item">
                            <p className="price-chart-info-title">P/E Ratio</p>
                            <p className="price-chart-info-data">{Math.round(this.state.keyStats.peRatio * 100) / 100}</p>
                        </div>
                        <div className="price-chart-info-item">
                            <p className="price-chart-info-title">Shares Outstanding</p>
                            <p className="price-chart-info-data">{this.state.keyStats.sharesOutstanding}</p>
                        </div>
                        <div className="price-chart-info-item">
                            <p className="price-chart-info-title">Next Earnings Data</p>
                            <p className="price-chart-info-data">{this.state.keyStats.nextEarningsDate}</p>
                        </div>
                        <div className="price-chart-info-item">
                            <p className="price-chart-info-title">Beta</p>
                            <p className="price-chart-info-data">{Math.round(this.state.keyStats.beta * 100) / 100}</p>
                        </div>
                        <div className="price-chart-info-item">
                            <p className="price-chart-info-title">Dividend Yeild</p>
                            <p className="price-chart-info-data">{this.state.keyStats.dividendYield}</p>
                        </div>
                        <div className="price-chart-info-item">
                            <p className="price-chart-info-title">Next Dividend Date</p>
                            <p className="price-chart-info-data">{this.state.keyStats.nextDividendDate}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default PriceChartInfo;