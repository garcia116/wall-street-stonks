import React from "react";
import { Bar } from "react-chartjs-2";



const EPSChart = (props) => {

    const thousand = 1000
    const million = 1000000
    const billion = 1000000000
    const trillion = 1000000000000
    const quadrillion = 1000000000000000

    var sharesOutstandingData = [{}]
    var netIncomeData = [{}]
    var chartxLabels = [{}]
    var EPSData = [{}]
    var EPSDataBackgroundColor = [{}]


    for (var i = 0; i < 12; i++) {
        chartxLabels[i] = `Y${props.incomeStatement.income[11 - i].fiscalYear} Q${props.incomeStatement.income[11 - i].fiscalQuarter}`
        netIncomeData[i] = props.incomeStatement.income[11 - i].netIncome
        sharesOutstandingData[i] = props.sharesOutstanding
        EPSData[i] = netIncomeData[i] / sharesOutstandingData[i]
        EPSDataBackgroundColor[i] = 'rgba(33, 206, 153, 1)'
    }

    return (
        <div className="chart">
            <Bar
                data={{
                    labels: chartxLabels,
                    datasets: [
                        {
                            label: "Earnings Per Share",
                            data: EPSData,
                            backgroundColor: EPSDataBackgroundColor
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
                                } else if (absyLabel >= thousand) {
                                    tooltipItem.yLabel = tooltipItem.yLabel / thousand
                                    label += Math.round(tooltipItem.yLabel * 100) / 100
                                    label = label + ' K'
                                } else if (absyLabel >= 0) {
                                    tooltipItem.yLabel = tooltipItem.yLabel
                                    label += Math.round(tooltipItem.yLabel * 100) / 100
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
                                    } else if (absValue >= thousand) {
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


export default EPSChart;
