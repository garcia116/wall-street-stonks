import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import ResearchHeader from '../../Components/ResearchHeader/ResearchHeader.js';
import Financials from '../../WebPages/ResearchPage/ResearchPageFinancials';
import Stats from '../../WebPages/ResearchPage/ResearchPageStats';
import Dividends from '../../WebPages/ResearchPage/ResearchPageDividends';
import PriceChart from '../../WebPages/ResearchPage/ResearchPagePriceChart';
import CompanyOverview from '../../WebPages/ResearchPage/ResearchPageCompanyOverview';
import Form from './Form.js'
import iex from '../../config/iex.js'
import './ResearchPage.css';

class ResearchPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tickerSymbol: '',
            price: 0,
            keyStats: [{}],
            isLoaded: false
            
        }
    }

    componentDidUpdate(prevState) {
        if (prevState.tickerSymbol !== this.state.tickerSymbol) {


            var sandboxMode = true
            var baseURL
            var token
            const keyStats = `/stock/${this.state.tickerSymbol}/stats/?&token=`
            const price = `/stock/${this.state.tickerSymbol}/price?&token=`


            if (sandboxMode) {
                baseURL = 'https://sandbox.iexapis.com/v1'
                token = 'Tpk_a909e54fc2ab44ac976155957da2a605'
            }
            else {
                baseURL = 'https://cloud.iexapis.com/v1'
                token = 'pk_2d87808402a3463ab504dac6eb52b540'
            }

            const keyStatsURL = baseURL + keyStats + token
            const priceURL = baseURL + price + token



            fetch(keyStatsURL)
                .then(response => response.json())
                .then(data => this.setState({ keyStats: data, isLoaded: true }))
            fetch(priceURL)
                .then(response => response.json())
                .then(data => this.setState({ price: data }))
        }
    }

    getStock = async (e) => {

        const stock = e.target.stockName.value;
        e.preventDefault();

        this.setState({
            tickerSymbol: stock
        })
        console.log(this.state.tickerSymbol)
    }
       
    
    render() {
        return (
                <div className="research-container">
                <Form getStock={this.getStock} />
                <ResearchHeader name={this.state.keyStats.companyName} price={this.state.price} tickerSymbol={this.state.tickerSymbol} marketcap={this.state.keyStats.marketcap} />
                    <BrowserRouter>
                        <div className="research-links">
                            <Link to="/ResearchPageFinancials">Financials</Link>
                            <Link to="/ResearchPageStats">Stats</Link>
                            <Link to="/ResearchPageDividends">Dividends</Link>
                            <Link to="/ResearchPagePriceChart">Price Chart</Link>
                            <Link to="/ResearchPageCompanyOverview">Company Overview</Link>
                        </div>
                        <Switch>
                            <Route path="/ResearchPageFinancials" component={Financials} />
                            <Route path="/ResearchPageStats" component={Stats} />
                            <Route path="/ResearchPageDividends" component={Dividends} />
                            <Route path="/ResearchPagePriceChart" component={PriceChart} />
                            <Route path="/ResearchPageCompanyOverview" component={CompanyOverview} />
                    </Switch>
                    </BrowserRouter>
                </div>
               
            )
    }
}
export default ResearchPage