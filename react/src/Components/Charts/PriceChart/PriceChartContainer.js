import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './PriceChartContainer.css';
import PriceChart from "../../Charts/PriceChart/PriceChart.js";


function PriceChartContainer({ tickerSymbol, keyStats }) {
    const [ticker] = useState(tickerSymbol)
    const [stats] = useState(keyStats)
    const [prices, setPrices] = useState()
    const [isLoaded, setLoaded] = useState(false)

    useEffect(() => {
        (async () => {
            let mounted = true
            if (mounted) {
                var sandboxMode = true
                var baseURL
                var token
                var range = '5y'
                const prices = `/stock/${ticker}/chart/${range}/?token=`

                if (sandboxMode) {
                    baseURL = 'https://sandbox.iexapis.com/v1'
                    token = 'Tpk_a909e54fc2ab44ac976155957da2a605'
                }
                else {
                    baseURL = 'https://cloud.iexapis.com/v1'
                    token = 'pk_2d87808402a3463ab504dac6eb52b540'
                }

                const pricesURL = baseURL + prices + token

                const pricesResult = await axios.get(pricesURL);
                setPrices(pricesResult.data)
                setLoaded(true)

            }
            return () => mounted = false;
        })();
    }, [ticker]);

    return (
        isLoaded ?
            <div className="price-chart-container">
                <div className="price-chart">
                    <PriceChart data={prices} keyStats={stats} />
                </div>
            </div>
            : <div>
                <div className="price-chart-container">
                    <div className="price-chart">
                        <h1>Loading...</h1>
                    </div>
                </div>
            </div>
    );
}

export default PriceChartContainer;