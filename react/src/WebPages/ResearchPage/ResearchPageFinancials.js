import React from 'react';
import './ResearchPageFinancials.css';
import NavBar from "../../Components/NavBar/NavBar.js";
import ResearchHeader from "../../Components/ResearchHeader/ResearchHeader.js";
import ResearchGraph from "../../Components/ResearchGraph/ResearchGraph.js";



function ResearchPageFinancials() {
    return (
        <div class="research-page-financials">
            <NavBar />
            <div className="research-page-financials-column-container">
                <ResearchHeader />
                <ResearchGraph />
                <ResearchGraph />
                <ResearchGraph />
            </div>
        </div>
    );
}


export default ResearchPageFinancials;