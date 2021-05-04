import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import ResearchHeader from '../../Components/ResearchHeader/ResearchHeader.js';
import Financials from '../../WebPages/ResearchPage/ResearchPageFinancials';
import PriceChart from '../../WebPages/ResearchPage/ResearchPagePriceChart';
import CompanyOverview from '../../WebPages/ResearchPage/ResearchPageCompanyOverview';
import './ResearchPage.css';

class ResearchPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tickerSymbol: 'TSLA',
            keyStats: [{}],
            isLoaded1: false
            
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
            .then(data => this.setState({ keyStats: data, isLoaded1: true }))

        }
       
    
    render() {
        return (
            <div className="research-container">
                <ResearchHeader name={this.state.keyStats.companyName} tickerSymbol={this.state.tickerSymbol} marketcap={this.state.keyStats.marketcap} />
                <BrowserRouter>
                    <div className="research-links">
                    <Link to="/ResearchPageFinancials">Financials</Link>
                    <Link to="/ResearchPagePriceChart">Price Chart</Link>
                    <Link to="/ResearchPageCompanyOverview">Company Overview</Link>
                    </div>
                    <Switch>
                        <Route path="/ResearchPageFinancials" component={Financials} />
                        <Route path="/ResearchPagePriceChart" component={PriceChart} />
                        <Route path="/ResearchPageCompanyOverview" component={CompanyOverview} />
                    </Switch>

                </BrowserRouter>
            </div>
            )
    }
}
export default ResearchPage