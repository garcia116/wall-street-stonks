import React from "react";
import { Bar } from "react-chartjs-2";

const PERatioChart = (props) => {
    const thousand = 1000

    var sharesOutstandingData = [{}]
    var PERatioData = [{}]
    var EPSData = [{}]
    var netIncomeData = [{}]
    var chartxLabels = [{}]
    var PERatioDataBackroundColor = [{}]

    for (var i = 0; i < 12; i++) {
        chartxLabels[i] = `Y${props.incomeStatement.income[11 - i].fiscalYear} Q${props.incomeStatement.income[11 - i].fiscalQuarter}`
        netIncomeData[i] = props.incomeStatement.income[11 - i].netIncome
        sharesOutstandingData[i] = props.sharesOutstanding
        EPSData[i] = netIncomeData[i] / sharesOutstandingData[i]
        PERatioData[i] = (props.prices[i].close / EPSData[i]) * 4
        PERatioDataBackroundColor[i] = 'rgba(33, 206, 153, 1)'
    }

    return (
        <div className="chart">
            <Bar
                data={{
                    labels: chartxLabels,
                    datasets: [
                        {
                            label: "P/E Ratio",
                            data: PERatioData,
                            backgroundColor: PERatioDataBackroundColor
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
                                label += ': ';
                                const absyLabel = Math.abs(tooltipItem.yLabel)

                                if (absyLabel >= 1000) {
                                    tooltipItem.yLabel = tooltipItem.yLabel / thousand
                                    label += Math.round(tooltipItem.yLabel * 100) / 100
                                    label = label + ' K'
                                } else {
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
                                    if (absValue >= 1000) {
                                        return ' ' + value / thousand + ' K'
                                    } else {
                                        return value
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


export default PERatioChart;
