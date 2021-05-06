import React, { Component } from 'react';
import './ResearchPageCompanyOverview.css';
import CompanyOverview from "../../Components/CompanyOverview/CompanyOverview.js";
import CompanyNews from "../../Components/CompanyNews/CompanyNews.js";


class ResearchPageCompanyOverview extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tickerSymbol: 'TSLA',
            logo: [{}],
            isloaded: false
        }
    }

    componentDidMount() {
        var sandboxMode = true
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
                <div className="research-page-company-overview">
                    <div className="research-page-company-overview-row-container">
                        <CompanyNews name={this.state.keyStats.companyName} />
                        <CompanyOverview name={this.state.keyStats.companyName} />
                    </div>
                </div>
                : <div></div>
        );
    }
}


export default ResearchPageCompanyOverview;
