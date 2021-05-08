import React, { Component } from "react";
import './ResearchHeader.css';

class ResearchHeader extends Component {
    constructor(props) {
        super(props)
        
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
                            Price: ${this.props.price}
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