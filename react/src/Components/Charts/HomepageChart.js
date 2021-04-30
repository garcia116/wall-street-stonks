import React from "react";
import { Bar, Line } from "react-chartjs-2";

const HomepageChart = (props) => {

    var chartxLabels = [{}]
    var revenueData = [{}]
    var revenueBackgroundColor = [{}]
    const daysIn5Years = 5 * 365 + 2;
    for (var i = 0; i < daysIn5Years; i++) {
        if (typeof props.data[i] === 'undefined') {
            break;
        }
        chartxLabels[i] = ' '//`Y${props.data[i].date}`
        revenueData[i] = props.data[i].close
        revenueBackgroundColor[i] = 'rgba(33, 109, 208, 1)'
    }

    return (
        <div className="chart">
            <p>SPY S&P 500 ETF</p>
            <Line
                data={{
                    labels: chartxLabels,
                    datasets: [
                        {
                            label: "Price",
                            data: revenueData,
                            backgroundColor: revenueBackgroundColor
                        },
                    ]
                }}
                options={{
                    responsive: true,
                    maintainAspectRatio: true,
                    elements: {
                        point: {
                            radius: 0
                        }
                    },
                    tooltips: {
                        mode: 'x-axis',
                        callbacks: {
                            label: function (tooltipItem, data) {
                                var label = data.datasets[tooltipItem.datasetIndex].label || '';
                                label += ': $' + tooltipItem.yLabel;
                                return label;
                            }
                        }
                    },
                    hover: {
                        mode: 'index',
                        intersect: false,
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
                                    return '$ ' + value
                                }
                            }
                        }]
                    }
                }}
            />
        </div>
    )
}


export default HomepageChart;