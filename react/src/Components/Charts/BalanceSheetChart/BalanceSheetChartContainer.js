import React, { Component } from 'react';
import './BalanceSheetChartContainer.css';
import BalanceSheetChart from "../../Charts/BalanceSheetChart/BalanceSheetChart.js";
import { useState, useEffect } from 'react';
import axios from 'axios';

function BalanceSheetChartContainer({ tickerSymbol }) {
    const [balanceSheet, setBalance] = useState()
    const [isLoaded, setLoaded] = useState()

    useEffect(() => {
        (async () => {
            let mounted = true
            if (mounted) {
                var sandboxMode = true
                var baseURL
                var token

                const balanceSheet = `/stock/${tickerSymbol}/balance-sheet?period=quarter&last=12&token=`

                if (sandboxMode) {
                    baseURL = 'https://sandbox.iexapis.com/v1'
                    token = 'Tpk_a909e54fc2ab44ac976155957da2a605'
                }
                else {
                    baseURL = 'https://cloud.iexapis.com/v1'
                    token = 'pk_2d87808402a3463ab504dac6eb52b540'
                }

                const balanceSheetURL = baseURL + balanceSheet + token
                const result = await axios.get(balanceSheetURL, {transformRequest: (data, headers) => {
                    delete headers.common['Authorization'];
                  }
                });
                setBalance(result.data)
                setLoaded(true)

                if (sandboxMode) {
                    function sleep(milliseconds) {
                        const date = Date.now();
                        let currentDate = null;
                        do {
                            currentDate = Date.now();
                        } while (currentDate - date < milliseconds);
                    }
                    sleep(100)
                }
            }
            return () => mounted = false;
        })();
    }, []);
    return (
        isLoaded ?
            <div className="balance-sheet-chart">
                <h2>Assets & Liabilities</h2>
                <BalanceSheetChart data={balanceSheet} />
            </div>
            :
            <div className="balance-sheet-chart">
                <h1>Loading...</h1>
                <h1>Or Unavailable</h1>
            </div>
    );
}



export default BalanceSheetChartContainer;