import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ResearchPagePriceChart.css';
import PriceChartContainer from '../../Components/Charts/PriceChart/PriceChartContainer.js';
import PriceChartInfo from '../../Components/Charts/PriceChart/PriceChartInfo';

const ResearchPagePriceChart = React.memo(({ tickerSymbol }) => {
    const [ticker] = useState(tickerSymbol)
    console.log(ticker)
    const [stats, setStats] = useState();
    const [isLoaded, setLoaded] = useState(false);

    useEffect(() => {
        (async () => {
            let mounted = true
            if (mounted) {
                var sandboxMode = true
                var baseURL
                var token
                const keyStats = `/stock/${ticker}/stats/?&token=`

                if (sandboxMode) {
                    baseURL = 'https://sandbox.iexapis.com/v1'
                    token = 'Tpk_a909e54fc2ab44ac976155957da2a605'
                }
                else {
                    baseURL = 'https://cloud.iexapis.com/v1'
                    token = 'pk_2d87808402a3463ab504dac6eb52b540'
                }

                const keyStatsURL = baseURL + keyStats + token

                const statsResult = await axios.get(keyStatsURL);
                setStats(statsResult.data)
                setLoaded(true)


            }
            return () => mounted = false;
        })();
    }, [ticker]);

    return (
        isLoaded ?
            <div className="research-page-price-chart">
                <PriceChartContainer tickerSymbol={ticker} keyStats={stats} />
                <PriceChartInfo tickerSymbol={ticker} keyStat={stats} />
            </div>
            :
            <div className="research-page-price-chart">Loading...</div>
    );

});

export default ResearchPagePriceChart;