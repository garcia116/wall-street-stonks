import React, { Component } from 'react';
import './ResearchPageFinancials.css';
import NavBar from "../../Components/NavBar/NavBar.js";
import ResearchHeader from "../../Components/ResearchHeader/ResearchHeader.js";
import ResearchGraph from "../../Components/ResearchGraph/ResearchGraph.js";



class ResearchPageFinancials extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tickerSymbol: 'TSLA',
            keyStats: [{}],
            incomeStatement: [{}],
            balanceSheet: [{}],
            isLoaded: false
        }
    }

    componentDidMount() {
        var sandboxMode = true
        var baseURL
        var token
        const keyStats = `/stock/${this.state.tickerSymbol}/stats/companyname?&token=`
        const incomeStatement = `/stock/${this.state.tickerSymbol}/income?period=quarter&last=12&token=`
        const balanceSheet = `/stock/${this.state.tickerSymbol}/balance-sheet?period=quarter&last=12&token=`
        

        if (sandboxMode) {
            baseURL = 'https://sandbox.iexapis.com/v1'
            token = 'Tpk_a909e54fc2ab44ac976155957da2a605'
        }
        else {
            baseURL = 'https://cloud.iexapis.com/v1'
            token = 'pk_2d87808402a3463ab504dac6eb52b540'
        }

        const keyStatsURL = baseURL + keyStats + token
        const incomeStatementURL = baseURL + incomeStatement + token
        const balanceSheetURL = baseURL + balanceSheet + token

        fetch(keyStatsURL)
            .then(response => response.json())
            .then(data => this.setState({ keyStats: data })) 
        fetch(balanceSheetURL)
            .then(response => response.json())
            .then(data => this.setState({ balanceSheet: data })) 
        fetch(incomeStatementURL)
            .then(response => response.json())
            .then(data => this.setState({ incomeStatement: data, isLoaded: true }))
    }

    render() {
        return (
            this.state.isLoaded ?
                <div className="research-page-financials">
                    <div className="research-page-financials-column-container">
                        <ResearchHeader name={this.state.keyStats.companyName} tickerSymbol={this.state.tickerSymbol}ice={this.state.price} marketcap={this.state.keyStats.marketcap} />
                        <ResearchGraph data={this.state.incomeStatement} chartFlag={0} />
                        <ResearchGraph data={this.state.balanceSheet} chartFlag={1} />
                        <ResearchGraph data={this.state.incomeStatement} data2={this.state.keyStats.sharesOutstanding} chartFlag={2} />
                    </div>
                </div>
                : <div></div>
        );
    }
}


export default ResearchPageFinancials;