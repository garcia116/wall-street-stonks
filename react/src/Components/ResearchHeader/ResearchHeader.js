import React from "react";
import './ResearchHeader.css';


function ResearchHeader() {
    return (
        <div>
            <div className="research-upper-header-container">
                <div className="research-header-ticker-name">
                        TSLA Tesla
                </div>
                <div className="research-header-price">
                        Price: $3,000
                </div>
                <div className="research-header-market-cap">
                        Market Cap: $3,000,000,000.00
                </div>
            </div>
            <div className="research-lower-header-container">
                <div className="research-header-financials">
                    <a class="nav-bar-link" href="/ResearchPageFinancials">
                        Financials
                    </a>
                </div>
                <div className="research-header-stock-chart">
                    <a class="nav-bar-link" href="/ResearchPageStockChart">
                        Stock Chart
                    </a>
                </div>
                <div className="research-header-company-overview">
                    <a class="nav-bar-link" href="/ResearchPageCompanyOverview">
                        Company Overview
                    </a>
                </div>
            </div>
        </div>
    )
}


export default ResearchHeader;