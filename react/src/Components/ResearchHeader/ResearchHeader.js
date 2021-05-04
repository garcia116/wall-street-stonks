import React, { Component } from "react";
import './ResearchHeader.css';
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Financials from '../../WebPages/ResearchPage/ResearchPageFinancials';
import PriceChart from '../../WebPages/ResearchPage/ResearchPagePriceChart';
import CompanyOverview from '../../WebPages/ResearchPage/ResearchPageCompanyOverview';
import ResearchPage from '../../WebPages/ResearchPage/ResearchPage.js';

class ResearchHeader extends Component {
    constructor(props) {
        super(props)
        this.state = {
            price: 0
        }
    }
    componentDidMount() {
        var sandboxMode = true
        var baseURL
        var token
        const price = '/stock/TSLA/price?&token='

        if (sandboxMode) {
            baseURL = 'https://sandbox.iexapis.com/v1'
            token = 'Tpk_a909e54fc2ab44ac976155957da2a605'
        }
        else {
            baseURL = 'https://cloud.iexapis.com/v1'
            token = 'pk_2d87808402a3463ab504dac6eb52b540'
        }

        const priceURL = baseURL + price + token

        fetch(priceURL)
            .then(response => response.json())
            .then(data => this.setState({ price: data }))
    }

    render() {
        const thousand = 1000
        const million = 1000000
        const billion = 1000000000
        const trillion = 1000000000000
        const quadrillion = 1000000000000000
        var marketcap = this.props.marketcap
        var marketcapLabel = 'Market Cap: $'

        if (marketcap >= quadrillion) {
            marketcap = marketcap / quadrillion
            marketcapLabel += Math.round(marketcap * 100) / 100
            marketcapLabel = marketcapLabel + ' Q'
        } else if (marketcap >= trillion) {
            marketcap = marketcap / trillion
            marketcapLabel += Math.round(marketcap * 100) / 100
            marketcapLabel = marketcapLabel + ' T'
        } else if (marketcap >= billion) {
            marketcap = marketcap / billion
            marketcapLabel += Math.round(marketcap * 100) / 100
            marketcapLabel = marketcapLabel + ' B'
        } else if (marketcap >= million) {
            marketcap = marketcap / million
            marketcapLabel += Math.round(marketcap * 100) / 100
            marketcapLabel = marketcapLabel + ' M'
        } else if (marketcap > 0) {
            marketcap = marketcap / thousand
            marketcapLabel += Math.round(marketcap * 100) / 100
            marketcapLabel = marketcapLabel + ' K'
        }

        return (
            <div className="research-header-container">
            <div className="reseach-banner">
                <div className="research-upper-header-container">
                    <div className="research-header-ticker-name">
                        {this.props.name}: {this.props.tickerSymbol}
                    </div>
                    <div className="research-header-price">
                        Price: ${this.state.price}
                    </div>
                    <div className="research-header-market-cap">
                        {marketcapLabel}
                    </div>
                </div>
                <div className="links">
                        
                </div>
            </div>
            </div>
        )
    }
}


export default ResearchHeader;