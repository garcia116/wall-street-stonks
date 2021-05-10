import React, { Component } from 'react';
import './News.css';

class News extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isloaded: false,
            newsArray: [{}]

        }
    }
    componentDidMount() {
        var sandboxMode = true
        var baseURL
        var token
        const keyStats = '/time-series/news/?range=last-week&limit=3&token='

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
            .then(data => this.setState({ newsArray: data, isLoaded: true }))

    }

    render() {
        return (
            this.state.isLoaded ?
                <div className="news-container">
                    <h3>Todays News</h3>
                    <a className="news-link" alt="" href={this.state.newsArray[0].qmUrl}>
                        <img className="news-img" src={this.state.newsArray[0].image}></img>
                    <p className="">{this.state.newsArray[0].headline}</p>
                    </a>
                    <a className="news-link" alt="" href={this.state.newsArray[1].qmUrl}>
                        <img className="news-img" src={this.state.newsArray[1].image}></img>
                        <p className="">{this.state.newsArray[1].headline}</p>
                    </a>
                    <a className="news-link" alt="" href={this.state.newsArray[2].qmUrl}>
                        <img className="news-img" src={this.state.newsArray[2].image}></img>
                        <p className="">{this.state.newsArray[2].headline}</p>
                    </a>
                </div>
                : <div></div>
        );
    }

}


export default News;
