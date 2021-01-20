import React, {Component} from 'react';
import './ResearchPageCompanyOverview.css';
import NavBar from "../../Components/NavBar/NavBar.js";
import ResearchHeader from "../../Components/ResearchHeader/ResearchHeader.js";


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
        const logo = `/stock/${this.state.tickerSymbol}/logo?&token=`

        if (sandboxMode) {
            baseURL = 'https://sandbox.iexapis.com/v1'
            token = 'Tpk_a909e54fc2ab44ac976155957da2a605'
        }
        else {
            baseURL = 'https://cloud.iexapis.com/v1'
            token = 'pk_2d87808402a3463ab504dac6eb52b540'
        }

        const logoURL = baseURL + logo + token

    }

    render() {
        return (
            <div className="research-page-company-overview">
                <NavBar />
                <div className="research-page-company-overview-column-container">
                    <ResearchHeader />

                </div>
            </div>
        );
    }
}


export default ResearchPageCompanyOverview;