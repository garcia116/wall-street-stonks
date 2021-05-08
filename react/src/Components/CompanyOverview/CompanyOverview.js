import React, { useEffect, useState } from 'react';
import './CompanyOverview.css';
import axios from 'axios';


function CompanyOverview({ tickerSymbol, companyName }) {
    const [ticker] = useState(tickerSymbol)
    const [logo, setLogo] = useState()
    const [companyInfo, setCompanyInfo] = useState()
    const [isLoaded, setLoaded] = useState(false)
    console.log(ticker)
    useEffect(() => {
        (async () => {
            let mounted = true
            if (mounted) {
                var sandboxMode = true
                var baseURL
                var token
                const logo = `/stock/${ticker}/logo?&token=`
                const company = `/stock/${ticker}/company?&token=`

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

                const logoResult = await axios.get(logoURL)
                const companyInfoResult = await axios.get(companyInfoURL)
                setLogo(logoResult.data)
                setCompanyInfo(companyInfoResult.data)
                setLoaded(true)
            
            }
            return () => mounted = false;
        })();
    }, [ticker]);

    return (
        isLoaded ?
            <div className="company-overview">
                <div>
                    <div className="company-website">
                        <img className="company-logo" src={logo.url} alt=""></img>
                        <p className="company-info-title">Website</p>
                        <a className="company-link" alt="" href={companyInfo.website}>
                            <p className="company-info-data">{companyInfo.website.slice(8, companyInfo.website.length - 1)}</p>
                        </a>
                    </div>
                    <p className="company-info-data">{companyInfo.description}</p>
                    <p className="company-info-title">CEO</p>
                    <p className="company-info-data">{companyInfo.CEO}</p>
                    <p className="company-info-title">Industry</p>
                    <p className="company-info-data">{companyInfo.industry}</p>
                    <p className="company-info-title">Address</p>
                    <p className="company-info-data-plus">{companyInfo.address}</p>
                    <p className="company-info-data-plus">{companyInfo.city}, {companyInfo.state}</p>
                    <p className="company-info-data">{companyInfo.zip}</p>
                    <p className="company-info-title">Employees</p>
                    <p className="company-info-data">{companyInfo.employees}</p>
                </div>
            </div>
            : <div>Loading...</div>
    );
}
export default CompanyOverview;