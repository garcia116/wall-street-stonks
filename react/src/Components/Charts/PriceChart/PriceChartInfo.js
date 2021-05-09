import React, { useEffect, useState } from 'react';
import './PriceChartInfo.css';
import axios from 'axios';

function numberWithCommas(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

function PriceChartInfo({ tickerSymbol, keyStat }) {

    const [ticker] = useState(tickerSymbol)
    const [keyStats] = useState(keyStat)
    const [advStats, setStats] = useState()
    const [isLoaded, setLoaded] = useState(false)
    console.log(ticker)

    useEffect(() => {
        (async () => {
            let mounted = true
            if (mounted) {
                var sandboxMode = true
                var baseURL
                var token
                const advStats = `/stock/${ticker}/advanced-stats/companyname?&token=`

                if (sandboxMode) {
                    baseURL = 'https://sandbox.iexapis.com/v1'
                    token = 'Tpk_a909e54fc2ab44ac976155957da2a605'
                }
                else {
                    baseURL = 'https://cloud.iexapis.com/v1'
                    token = 'pk_2d87808402a3463ab504dac6eb52b540'
                }

                const advStatsURL = baseURL + advStats + token
                const statsResult = await axios.get(advStatsURL)
                setStats(statsResult.data)
                console.log(advStats)
                setLoaded(true)
                
            }           
            
            return () => mounted = false;
        })();
    }, [ticker]);

    if (advStats) {
        var forwardPERatio = advStats.forwardPERatio === "" ? "-" : (advStats.forwardPERatio).toFixed(2);
        var peRatio = keyStats.peRatio === "" ? "-" : (keyStats.peRatio).toFixed(2);
        var profitMargin = advStats.profitMargin === "" ? "-" : (advStats.profitMargin * 100).toFixed(2) + "%";
        var nextEarningsDate = keyStats.nextEarningsDate === "" ? "-" : keyStats.nextEarningsDate;
        var beta = keyStats.beta === "" ? "-" : (keyStats.beta).toFixed(2)
        var sharesOutstanding = keyStats.sharesOutstanding === "" ? "-" : numberWithCommas((keyStats.sharesOutstanding / 1000000).toFixed(0)) + " M";
        var dividendYeild = keyStats.dividendYield === "" ? "-" : Math.round(keyStats.dividendYield * 10000) / 100 + "%";
        var nextDividendDate = keyStats.nextDividendDate === "" || keyStats.nextDividendDate === "0" ? "-" : keyStats.nextDividendDate;
        var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        nextEarningsDate = month[Number((nextEarningsDate).slice(5, 7)) - 1] + " " + Number((nextEarningsDate).slice(8, 10)) + ", " + (nextEarningsDate).slice(0, 4)
        nextDividendDate = month[Number((nextDividendDate).slice(5, 7)) - 1] + " " + Number((nextDividendDate).slice(8, 10)) + ", " + (nextDividendDate).slice(0, 4)
    }

return (
    isLoaded ?
        <div className="price-chart-info-container">
            <div className="price-chart-info">
                <div className="price-chart-info-item-row">
                    <div className="price-chart-info-item">
                        <p className="price-chart-info-title">Forward P/E Ratio</p>
                        <p className="price-chart-info-data">{forwardPERatio}</p>
                    </div>
                    <div className="price-chart-info-item">
                        <p className="price-chart-info-title">P/E Ratio</p>
                        <p className="price-chart-info-data">{peRatio}</p>
                    </div>
                    <div className="price-chart-info-item">
                        <p className="price-chart-info-title">Profit Margin</p>
                        <p className="price-chart-info-data">{profitMargin}</p>
                    </div>
                    <div className="price-chart-info-item">
                        <p className="price-chart-info-title">Shares Outstanding</p>
                        <p className="price-chart-info-data">{sharesOutstanding}</p>
                    </div>

                    <div className="price-chart-info-item">
                        <p className="price-chart-info-title">Beta</p>
                        <p className="price-chart-info-data">{beta}</p>
                    </div>
                    <div className="price-chart-info-item">
                        <p className="price-chart-info-title">Dividend Yeild</p>
                        <p className="price-chart-info-data">{dividendYeild}</p>
                    </div>
                    <div className="price-chart-info-item">
                        <p className="price-chart-info-title">Next Dividend Date</p>
                        <p className="price-chart-info-data">{nextDividendDate}</p>
                    </div>
                    <div className="price-chart-info-item">
                        <p className="price-chart-info-title">Next Earnings Date</p>
                        <p className="price-chart-info-data">{nextEarningsDate}</p>
                    </div>
                </div>
                <div className="price-chart-info-item-row">

                </div>
            </div>
        </div>
        : <div>Loading...</div>
);

}

export default PriceChartInfo;
