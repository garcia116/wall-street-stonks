import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";
import ResearchHeader from '../../Components/ResearchHeader/ResearchHeader.js';
import Financials from '../../WebPages/ResearchPage/ResearchPageFinancials';
import Stats from '../../WebPages/ResearchPage/ResearchPageStats';
import Dividends from '../../WebPages/ResearchPage/ResearchPageDividends';
import PriceChart from '../../WebPages/ResearchPage/ResearchPagePriceChart';
import CompanyOverview from '../../WebPages/ResearchPage/ResearchPageCompanyOverview';
import Form from './Form.js'
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

    componentDidUpdate(prevProps,prevState) {
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
                .then(console.log(price))           
        }
    }
    shouldComponentUpdate(nextState) {
        if (this.state.tickerSymbol === nextState.tickerSymbol) {
            return false;
        } else {
            return true;
        }
    }

    getStock = async (e) => {

        const stock = e.target.stockName.value;
        e.preventDefault();

        this.setState({
            tickerSymbol: stock.toUpperCase()
        })
        console.log(this.state.tickerSymbol)
    }
       
    
    render() {
        return (
            <div>
                <div className="ticker-search-background">
                    <div className="ticker-search">
                        <Form getStock={this.getStock} />
                    </div>
                </div>
                <ResearchHeader className="research-header"name={this.state.keyStats.companyName} price={this.state.price} tickerSymbol={this.state.tickerSymbol} marketcap={this.state.keyStats.marketcap} />
                    <BrowserRouter>
                        <div className="research-links">
                        <Link to="/ResearchPageFinancials" className="research-link">Financials</Link>
                        <Link to="/ResearchPageStats" className="research-link">EPS</Link>
                        <Link to="/ResearchPageDividends" className="research-link">Dividends</Link>
                        <Link to="/ResearchPagePriceChart" className="research-link">Price Chart</Link>
                        <Link to="/ResearchPageCompanyOverview" className="research-link">Company Overview</Link>
                        </div>
                    <Switch>
                        <Redirect from="/ResearchPage" to="/ResearchPageFinancials"/>
                        <Route path="/ResearchPageFinancials" component={() => <Financials tickerSymbol={this.state.tickerSymbol} />} />
                        <Route path="/ResearchPageStats" component={() => <Stats tickerSymbol={this.state.tickerSymbol} />} />
                        <Route path="/ResearchPageDividends" component={() => <Dividends tickerSymbol={this.state.tickerSymbol} />} />
                        <Route path="/ResearchPagePriceChart" component={() => <PriceChart tickerSymbol={this.state.tickerSymbol} />} />
                        <Route path="/ResearchPageCompanyOverview" component={() => <CompanyOverview tickerSymbol={this.state.tickerSymbol} />} />
                    </Switch>
                    </BrowserRouter>
                </div>
               
            )
    }
}
export default ResearchPage