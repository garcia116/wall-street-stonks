import React, { useState, useEffect } from 'react';
import './IncomeStatementChartContainer.css';
import IncomeStatementChart from "../../Charts/IncomeStatementChart/IncomeStatementChart.js";
import axios from 'axios';


function IncomeStatementChartContainer({ tickerSymbol }) {

    const [income, setData] = useState(tickerSymbol);
    const [isLoaded, setLoaded] = useState(false);

    useEffect(() => {
        (async () => {
            let mounted = true
            if (mounted) {


                var sandboxMode = true

                var baseURL
                var token
                console.log(income)
                const incomeStatement = `/stock/${tickerSymbol}/income?period=quarter&last=12&token=`

                if (sandboxMode) {
                    baseURL = 'https://sandbox.iexapis.com/v1'
                    token = 'Tpk_a909e54fc2ab44ac976155957da2a605'
                }
                else {
                    baseURL = 'https://cloud.iexapis.com/v1'
                    token = 'pk_2d87808402a3463ab504dac6eb52b540'
                }

                const incomeStatementURL = baseURL + incomeStatement + token
                const result = await axios.get(incomeStatementURL);
                console.log(result)
                setData(result.data)
                setLoaded(true)

                function sleep(milliseconds) {
                    const date = Date.now();
                    let currentDate = null;
                    do {
                        currentDate = Date.now();
                    } while (currentDate - date < milliseconds);
                }
                sleep(70)
            }
            return () => mounted = false;
        })();
    }, []);

    return (
        isLoaded ?
            <div className="income-statement-chart">
                <h2>Revenue, Operating Expenses, & Income</h2>
                  <IncomeStatementChart data={income} />
            </div>
            :
            <div className="income-statement-chart">
                <h1>Income Statement</h1>
                <p>Loading...</p>
            </div>
    );
}


export default IncomeStatementChartContainer;