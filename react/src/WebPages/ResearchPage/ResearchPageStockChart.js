import React from 'react';
import './ResearchPageStockChart.css';
import NavBar from "../../Components/NavBar/NavBar.js";
import ResearchHeader from "../../Components/ResearchHeader/ResearchHeader.js";


function ResearchPageStockChart() {
    return (
        <div className="research-page-stock-chart">
            <NavBar />
            <div className="research-page-stock-chart-column-container">
                <ResearchHeader />
            </div>
        </div>
    );
}


export default ResearchPageStockChart;