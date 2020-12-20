import React from 'react';
import './ResearchPageCompanyOverview.css';
import NavBar from "../../Components/NavBar/NavBar.js";
import ResearchHeader from "../../Components/ResearchHeader/ResearchHeader.js";


function ResearchPageCompanyOverview() {
    return (
        <div class="research-page-company-overview">
            <NavBar />
            <div className="research-page-company-overview-column-container">
                <ResearchHeader />
            </div>
        </div>
    );
}


export default ResearchPageCompanyOverview;