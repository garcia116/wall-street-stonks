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
                    <div>
                        <div className="company-website">
                            <img className="company-logo" src={this.state.logo.url} alt=""></img>
                            <p className="company-info-title">Website</p>
                            <a className="nav-bar-link" alt="" href={this.state.companyInfo.website}>
                                <p className="company-info-data">{this.state.companyInfo.website.slice(8, this.state.companyInfo.website.length -1)}</p>
                            </a>
                        </div>
                        <p className="company-info-data">{this.state.companyInfo.description}</p>
                        <p className="company-info-title">CEO</p>
                        <p className="company-info-data">{this.state.companyInfo.CEO}</p>
                        <p className="company-info-title">Industry</p>
                        <p className="company-info-data">{this.state.companyInfo.industry}</p>
                        <p className="company-info-title">Address</p>
                        <p className="company-info-data-plus">{this.state.companyInfo.address}</p>
                        <p className="company-info-data-plus">{this.state.companyInfo.city}, {this.state.companyInfo.state}</p>
                        <p className="company-info-data">{this.state.companyInfo.zip}</p>
                        <p className="company-info-title">Employees</p>
                        <p className="company-info-data">{this.state.companyInfo.employees}</p>
                    </div>
                </div>
                : <div>Loading...</div>
        );
    }
}


export default CompanyOverview;