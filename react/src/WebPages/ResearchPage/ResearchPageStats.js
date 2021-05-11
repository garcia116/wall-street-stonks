import React, { useEffect, useState } from 'react';
import './ResearchPageStats.css';
import EPSChartContainer from "../../Components/Charts/EPSChart/EPSChartContainer.js";
import axios from 'axios';

const ResearchPageStats = React.memo(({ tickerSymbol }) => {

    const [ticker] = useState(tickerSymbol);
    const [stats, setStats] = useState();
    console.log(stats)
    const [income, setIncome] = useState();
    const [isLoaded1, setLoaded1] = useState(false);
    const [isLoaded2, setLoaded2] = useState(false);

    useEffect(() => {
        (async () => {
            let mounted = true
            if (mounted) {
                var sandboxMode = true
                var baseURL
                var token
                const keyStats = `/stock/${tickerSymbol}/stats/?&token=`
                const incomeStatement = `/stock/${tickerSymbol}/income?period=quarter&last=12&token=`

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

                const statsResult = await axios.get(keyStatsURL, {transformRequest: (data, headers) => {
                    delete headers.common['Authorization'];
                  }
                });
                const incomeResult = await axios.get(incomeStatementURL, {transformRequest: (data, headers) => {
                    delete headers.common['Authorization'];
                  }
                });
                setStats(statsResult.data)
                setLoaded1(true)
                setIncome(incomeResult.data)
                setLoaded2(true)

            }
            return () => mounted = false;
        })();
    }, [ticker]);

    return (
        isLoaded1 && isLoaded2 ?
            <div className="research-page-stats">
                <EPSChartContainer incomeStatement={income} sharesOutstanding={stats.sharesOutstanding} />
            </div>
            :
            <div className="research-page-stats">
                <h1>Loading...</h1>
            </div>
    );
});

export default ResearchPageStats;