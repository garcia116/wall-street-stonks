import React, { Component } from 'react';
import './ResearchPagePriceChart.css';
import ResearchHeader from "../../Components/ResearchHeader/ResearchHeader.js";
import PriceChartContainer from '../../Components/Charts/PriceChart/PriceChartContainer.js';
import PriceChartInfo from '../../Components/Charts/PriceChart/PriceChartInfo';


class ResearchPagePriceChart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tickerSymbol: 'TSLA',
            keyStats: [{}],
            isloaded: false
        }
    }

    componentDidMount() {
        var sandboxMode = false
        var baseURL
        var token
        const keyStats = `/stock/${this.state.tickerSymbol}/stats/companyname?&token=`

        if (sandboxMode) {
            baseURL = 'https://sandbox.iexapis.com/v1'
            token = 'Tpk_a909e54fc2ab44ac976155957da2a605'
        }
        else {
            baseURL = 'https://cloud.iexapis.com/v1'
            token = 'pk_2d87808402a3463ab504dac6eb52b540'
        }

        const keyStatsURL = baseURL + keyStats + token

        fetch(keyStatsURL)
            .then(response => response.json())
            .then(data => this.setState({ keyStats: data, isLoaded: true }))
    }

    render() {
        return (
            this.state.isLoaded ?
                <div className="research-page-price-chart">
                    <ResearchHeader name={this.state.keyStats.companyName} tickerSymbol={this.state.tickerSymbol} price={this.state.price} marketcap={this.state.keyStats.marketcap} />
                    <div className="research-page-price-chart-column-container">
                        <PriceChartContainer tickerSymbol={this.state.tickerSymbol} keyStats={this.state.keyStats}/>
                        <PriceChartInfo tickerSymbol={this.state.tickerSymbol} keyStats={this.state.keyStats}/>
                    </div>
                </div>
                : <div>Loading...</div>
        );
    }
}


export default ResearchPagePriceChart;