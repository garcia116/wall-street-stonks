import React, { Component } from 'react';
import './PriceChartInfo.css';

class PriceChartInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tickerSymbol: props.tickerSymbol,
            keyStats: props.keyStats,
            advStats: [{}],
            isLoaded: false
        }
    }

    componentDidMount() {
        var sandboxMode = true
        var baseURL
        var token
        const advStats = `/stock/${this.state.tickerSymbol}/advanced-stats/companyname?&token=`

        if (sandboxMode) {
            baseURL = 'https://sandbox.iexapis.com/v1'
            token = 'Tpk_a909e54fc2ab44ac976155957da2a605'
        }
        else {
            baseURL = 'https://cloud.iexapis.com/v1'
            token = 'pk_2d87808402a3463ab504dac6eb52b540'
        }

        const advStatsURL = baseURL + advStats + token

        fetch(advStatsURL)
            .then(response => response.json())
            .then(data => this.setState({ advStats: data, isLoaded: true }))
    }

    render() {
        var forwardPERatio = this.state.advStats.forwardPERatio === "" ? "-" : Math.round(this.state.advStats.forwardPERatio * 100) / 100;
        var peRatio = this.state.keyStats.peRatio === "" ? "-" : Math.round(this.state.keyStats.peRatio * 100) / 100;
        var psRatio = this.state.keyStats.priceToSales === "" ? "-" : Math.round(this.state.keyStats.priceToSales * 100) / 100;
        var profitMargin = this.state.advStats.profitMargin === "" ? "-" : Math.round(this.state.advStats.profitMargin * 100) + "%";
        var nextEarningsDate = this.state.keyStats.nextEarningsDate === "" ? "-" : this.state.keyStats.nextEarningsDate;
        var beta = this.state.keyStats.beta === "" ? "-" : Math.round(this.state.keyStats.beta * 100) / 100;
        var sharesOutstanding = this.state.keyStats.sharesOutstanding === "" ? "-" : Math.round(this.state.keyStats.sharesOutstanding / 1000000 * 100 ) / 100 + "M";
        var dividendYeild = this.state.keyStats.dividendYield === "" ? "-" : Math.round(this.state.keyStats.dividendYield * 10000) / 100 + "%";
        var nextDividendDate = this.state.keyStats.nextDividendDate === "" ? "-" : this.state.keyStats.nextDividendDate;


        return (
            this.state.isLoaded ?
            <div className="price-chart-info-container">
                <div className="price-chart-info">
                    <div className="price-chart-info-item-row">
                        <div className="price-chart-info-item">
                            <p className="price-chart-info-title">Forward P/E Ratio</p>
                            <p className="price-chart-info-data">{forwardPERatio}</p>
                        </div>
                        <div className="price-chart-info-item">
                            <p className="price-chart-info-title">P/E Ratio</p>
                            <p className="price-chart-info-data">{peRatio}</p>
                        </div>
                        <div className="price-chart-info-item">
                            <p className="price-chart-info-title">P/S Ratio</p>
                            <p className="price-chart-info-data">{psRatio}</p>
                        </div>
                        <div className="price-chart-info-item">
                            <p className="price-chart-info-title">Profit Margin</p>
                            <p className="price-chart-info-data">{profitMargin}</p>
                        </div>
                        <div className="price-chart-info-item">
                            <p className="price-chart-info-title">Shares Outstanding</p>
                            <p className="price-chart-info-data">{sharesOutstanding}</p>
                        </div>
                        
                        <div className="price-chart-info-item">
                            <p className="price-chart-info-title">Beta</p>
                            <p className="price-chart-info-data">{beta}</p>
                        </div>
                        <div className="price-chart-info-item">
                            <p className="price-chart-info-title">Dividend Yeild</p>
                            <p className="price-chart-info-data">{dividendYeild}</p>
                        </div>
                        <div className="price-chart-info-item">
                            <p className="price-chart-info-title">Next Dividend Date</p>
                            <p className="price-chart-info-data">{nextDividendDate}</p>
                        </div>
                        <div className="price-chart-info-item">
                            <p className="price-chart-info-title">Next Earnings Date</p>
                            <p className="price-chart-info-data">{nextEarningsDate}</p>
                        </div>
                    </div>
                    <div className="price-chart-info-item-row">
                        
                    </div>
                </div>
            </div>
            : <div>Loading...</div>
        );
    }
}


export default PriceChartInfo;