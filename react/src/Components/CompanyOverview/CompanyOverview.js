import React, { Component } from 'react';
import './CompanyOverview.css';


class CompanyOverview extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tickerSymbol: 'TSLA',
            logo: [{}],
            isloaded: false
        }
    }

    componentDidMount() {
        var sandboxMode = false
        var baseURL
        var token
        const logo = `/stock/${this.state.tickerSymbol}/logo?&token=`
        const company = `/stock/${this.state.tickerSymbol}/company?&token=`

        if (sandboxMode) {
            baseURL = 'https://sandbox.iexapis.com/v1'
            token = 'Tpk_a909e54fc2ab44ac976155957da2a605'
        }
        else {
            baseURL = 'https://cloud.iexapis.com/v1'
            token = 'pk_2d87808402a3463ab504dac6eb52b540'
        }

        const logoURL = baseURL + logo + token
        const companyInfoURL = baseURL + company + token

        fetch(logoURL)
            .then(response => response.json())
            .then(data => this.setState({ logo: data }))
        fetch(companyInfoURL)
            .then(response => response.json())
            .then(data => this.setState({ companyInfo: data, isLoaded: true }))
    }

    render() {
        return (
            this.state.isLoaded ?
                <div className="company-overview">
                    <div className="company-logo">
                        <img src={this.state.logo.url} alt=""></img>
                        <p className="company-description">{this.state.companyInfo.description}</p>
                    </div>
                </div>
                : <div></div>
        );
    }
}


export default CompanyOverview;