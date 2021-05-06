import React from "react";
import { Bar } from "react-chartjs-2";

const CashFlowChart = (props) => {
    // Number Dividers
    const thousand = 1000
    const million = 1000000
    const billion = 1000000000
    const trillion = 1000000000000
    const quadrillion = 1000000000000000

    // Chart Data
    var chartxLabels = [{}];

    var netIncomeData = [{}];
    var netIncomeBackgroundColor = [{}]

    var capitalExpendituresData = [{}]
    var capitalExpendituresBackgroundColor = [{}]

    var cashFlowData = [{}]
    var cashFlowBackgroundColor = [{}]

    var cashChangeData = [{}]
    var cashChangeBackgroundColor = [{}]

    var dividendsPaidData = [{}]
    var dividendsPaidBackgroundColor = [{}]

    for (var i = 0; i < 12; i++) {
        chartxLabels[i] = `Y${props.cashFlow.cashflow[11 - i].fiscalYear} Q${props.cashFlow.cashflow[11 - i].fiscalQuarter }`

        netIncomeData[i] = props.cashFlow.cashflow[11 - i].netIncome
        netIncomeBackgroundColor[i] = 'rgba(33, 109, 208, 1)'

        capitalExpendituresData[i] = props.cashFlow.cashflow[11 - i].capitalExpenditures
        capitalExpendituresBackgroundColor[i] = 'rgba(244, 84, 48, 1)'

        cashFlowData[i] = props.cashFlow.cashflow[11 - i].cashFlow
        cashFlowBackgroundColor[i] = 'rgba(208, 208, 33, 1)'

        cashChangeData[i] = props.cashFlow.cashflow[11 - i].cashChange
        cashChangeBackgroundColor[i] = 'rgba(33, 206, 153, 1)'

        dividendsPaidData = props.cashFlow.cashflow[11 - i].dividendsPaid
        dividendsPaidBackgroundColor[i] = 'rgba(125, 30, 210, 1)'
    }
    return (
        <div className="chart">
            <Bar
                data={{
                    labels: chartxLabels,
                    datasets: [
                        {
                            label: "Free Cash Flow",
                            data: netIncomeData,
                            backgroundColor: netIncomeBackgroundColor
                        },
                        {
                            label: "Capital Expenditures",
                            data: capitalExpendituresData,
                            backgroundColor: capitalExpendituresBackgroundColor
                        },
                        {
                            label: "Operating Cash Flow",
                            data: cashFlowData,
                            backgroundColor: cashFlowBackgroundColor
                        },
                        {
                            label: "Cash Change",
                            data: cashChangeData,
                            backgroundColor: cashChangeBackgroundColor
                        },
                        {
                            label: "Dividends Paid",
                            data: dividendsPaidData,
                            backgroundColor: dividendsPaidBackgroundColor
                        }
                    ]
                }}
                options={{
                    responsive: true,
                    maintainAspectRatio: true,
                    tooltips: {
                        callbacks: {
                            label: function (tooltipItem, data) {
                                var label = data.datasets[tooltipItem.datasetIndex].label || '';
                                label += ': $';
                                const absyLabel = Math.abs(tooltipItem.yLabel)

                                if (absyLabel >= quadrillion) {
                                    tooltipItem.yLabel = tooltipItem.yLabel / quadrillion
                                    label += Math.round(tooltipItem.yLabel * 100) / 100
                                    label = label + ' Q'
                                } else if (absyLabel >= trillion) {
                                    tooltipItem.yLabel = tooltipItem.yLabel / trillion
                                    label += Math.round(tooltipItem.yLabel * 100) / 100
                                    label = label + ' T'
                                } else if (absyLabel >= billion) {
                                    tooltipItem.yLabel = tooltipItem.yLabel / billion
                                    label += Math.round(tooltipItem.yLabel * 100) / 100
                                    label = label + ' B'
                                } else if (absyLabel >= million) {
                                    tooltipItem.yLabel = tooltipItem.yLabel / million
                                    label += Math.round(tooltipItem.yLabel * 100) / 100
                                    label = label + ' M'
                                } else if (absyLabel > 0) {
                                    tooltipItem.yLabel = tooltipItem.yLabel / thousand
                                    label += Math.round(tooltipItem.yLabel * 100) / 100
                                    label = label + ' K'
                                }
                                return label;
                            }
                        }
                    },
                    scales: {
                        xAxes: [{
                            gridLines: {
                                display: false
                            }
                        }],
                        yAxes: [{
                            gridLines: {
                                display: true,
                                color: '#181818',
                                zeroLineColor: '#181818',
                                drawBorder: false,
                            },
                            ticks: {
                                callback: function (value) {
                                    const absValue = Math.abs(value)
                                    if (absValue >= quadrillion) {
                                        return '$ ' + value / quadrillion + ' Q'
                                    } else if (absValue >= trillion) {
                                        return '$ ' + value / trillion + ' T'
                                    } else if (absValue >= billion) {
                                        return '$ ' + value / billion + ' B'
                                    } else if (absValue >= million) {
                                        return '$ ' + value / million + ' M'
                                    } else if (absValue > 0) {
                                        return '$ ' + value / thousand + ' K'
                                    } else {
                                        return '$ ' + value
                                    }
                                }
                            }
                        }]
                    }
                }}
            />
        </div>
    )
}


export default CashFlowChart;