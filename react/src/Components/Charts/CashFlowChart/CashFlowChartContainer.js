import React, { useState, useEffect } from 'react';
import './CashFlowChartContainer.css';
import CashFlowChart from "../../Charts/CashFlowChart/CashFlowChart.js";
import axios from 'axios';

function CashFlowChartContainer({ tickerSymbol }) {

    const [cashFlow, setCashFlow] = useState()
    const [isLoaded, setLoaded] = useState()

    useEffect(() => {
        (async () => {
            let mounted = true
            if (mounted) {
                var sandboxMode = true
                var baseURL
                var token

                const cashFlow = `/stock/${tickerSymbol}/cash-flow?period=quarter&last=12&token=`

                if (sandboxMode) {
                    baseURL = 'https://sandbox.iexapis.com/v1'
                    token = 'Tpk_a909e54fc2ab44ac976155957da2a605'
                }
                else {
                    baseURL = 'https://cloud.iexapis.com/v1'
                    token = 'pk_2d87808402a3463ab504dac6eb52b540'
                }

                const cashFlowURL = baseURL + cashFlow + token
                const result = await axios.get(cashFlowURL)
                setCashFlow(result.data)
                setLoaded(true)

                function sleep(milliseconds) {
                    const date = Date.now();
                    let currentDate = null;
                    do {
                        currentDate = Date.now();
                    } while (currentDate - date < milliseconds);
                }
                sleep(100)
            }
            return () => mounted = false;
        })();
    }, []);
    return (
        isLoaded ?
            <div className="cash-flow-chart-container">
                <p>Cash Flow</p>
                <div className="cash-flow-chart">
                    <CashFlowChart cashFlow={cashFlow} />
                </div>
            </div>
            :
            <div className="cash-flow-chart-container">
                <p>Cash Flow</p>
                <div className="cash-flow-chart">
                    <h1>Loading...</h1>
                </div>
            </div>
    );
}
export default CashFlowChartContainer;