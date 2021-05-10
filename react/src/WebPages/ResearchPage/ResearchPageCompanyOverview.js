import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ResearchPageCompanyOverview.css';
import CompanyOverview from "../../Components/CompanyOverview/CompanyOverview.js";
import CompanyNews from "../../Components/CompanyNews/CompanyNews.js";

function ResearchPageCompanyOverview({ tickerSymbol }) {

    const [ticker] = useState(tickerSymbol)
    const [stats, setStats] = useState()
    const [isLoaded, setLoaded] = useState(false)

    useEffect(() => {
        (async () => {
            let mounted = true
            if (mounted) {
                var sandboxMode = true
                var baseURL
                var token
                const keyStats = `/stock/${ticker}/stats/companyname?&token=`

                if (sandboxMode) {
                    baseURL = 'https://sandbox.iexapis.com/v1'
                    token = 'Tpk_a909e54fc2ab44ac976155957da2a605'
                }
                else {
                    baseURL = 'https://cloud.iexapis.com/v1'
                    token = 'pk_2d87808402a3463ab504dac6eb52b540'
                }

                const keyStatsURL = baseURL + keyStats + token
                const statsResult = await axios.get(keyStatsURL)
                setStats(statsResult.data)
                setLoaded(true)


            }
            return () => mounted = false;
        })();
    }, [ticker]);

    return (
        isLoaded ?
            <div className="research-page-company-overview">
                    <CompanyNews tickerSymbol={ticker} />
                    <CompanyOverview tickerSymbol={ticker} />
            </div>
            :
            <div>
                <h1>Income Statement</h1>
                <h1>Loading...</h1>
                <h1>Or Unavailable</h1>
            </div>
    );
}

export default ResearchPageCompanyOverview;
