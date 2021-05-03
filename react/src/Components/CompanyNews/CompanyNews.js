import React, { Component } from 'react';
import './CompanyNews.css';


class CompanyNews extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tickerSymbol: "TSLA",
            companyNews: [{}],
            isloaded: false
        }
    }

    componentDidMount() {
        var sandboxMode = true
        var baseURL
        var token
        const companyNews = `/time-series/news/${this.state.tickerSymbol}/?range=last-week&limit=5&token=`
        const companyNews = `/time-series/news/${this.state.tickerSymbol}/?range=last-week&limit=3&token=`

        if (sandboxMode) {
            baseURL = 'https://sandbox.iexapis.com/v1'
            token = 'Tpk_a909e54fc2ab44ac976155957da2a605'
        }
        else {
            baseURL = 'https://cloud.iexapis.com/v1'
            token = 'pk_2d87808402a3463ab504dac6eb52b540'
        }

        const companyNewsURL = baseURL + companyNews + token

        fetch(companyNewsURL)
            .then(response => response.json())
            .then(data => this.setState({ companyNews: data, isLoaded: true }))
    }

    render() {
        return (
            this.state.isLoaded ?
                <div>
                    <a className="company-news-link" alt="" href={this.state.companyNews[0].qmUrl}>
                        <img className="company-news-img" alt="" src={this.state.companyNews[0].image}></img>
                        <p className="">{this.state.companyNews[0].headline}</p>
                    </a>
                    <a className="company-news-link" alt="" href={this.state.companyNews[1].qmUrl}>
                        <img className="company-news-img" alt="" src={this.state.companyNews[1].image}></img>
                        <p className="">{this.state.companyNews[1].headline}</p>
                    </a>
                    <a className="company-news-link" alt="" href={this.state.companyNews[2].qmUrl}>
                        <img className="company-news-img" alt="" src={this.state.companyNews[2].image}></img>
                        <p className="">{this.state.companyNews[2].headline}</p>
                    </a>
                </div>
                : <div></div>
        );
    }
}


export default CompanyNews;
