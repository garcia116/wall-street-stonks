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
            marketcapLabel += marketcap.toFixed(2)
            marketcapLabel = marketcapLabel + ' Q'
        } else if (marketcap >= trillion) {
            marketcap = marketcap / trillion
            marketcapLabel += marketcap.toFixed(2)
            marketcapLabel = marketcapLabel + ' T'
        } else if (marketcap >= billion) {
            marketcap = marketcap / billion
            marketcapLabel += marketcap.toFixed(2)
            marketcapLabel = marketcapLabel + ' B'
        } else if (marketcap >= million) {
            marketcap = marketcap / million
            marketcapLabel += marketcap.toFixed(2)
            marketcapLabel = marketcapLabel + ' M'
        } else if (marketcap > 0) {
            marketcap = marketcap / thousand
            marketcapLabel += marketcap.toFixed(2)
            marketcapLabel = marketcapLabel + ' K'
        }

        return (
            <div className="research-banner">
                    
                    <div className="research-banner-items">
                        <div>
                            {this.props.name}: {this.props.tickerSymbol}
                        </div>
                        <div>
                            Price: ${this.props.price}
                        </div>
                        <div>
                            {marketcapLabel}
                        </div>
                    </div>
            </div>
        )
    }
}


export default ResearchHeader;