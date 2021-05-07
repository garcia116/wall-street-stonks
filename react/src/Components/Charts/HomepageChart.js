import React from "react";
import { Line } from "react-chartjs-2";

const HomepageChart = (props) => {

    var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    var chartxLabels = [{}]
    var data = [{}]
    var backgroundColor
    var percentChange
    const daysIn5Years = 5 * 365 + 2;
    var i 
    for (i = 0; i < daysIn5Years; i++) {
        if (typeof props.data[i] === 'undefined') {
            break;
        }
        chartxLabels[i] = month[Number((props.data[i].date).slice(5, 7)) - 1] + " " + Number((props.data[i].date).slice(8, 10)) + ", " + (props.data[i].date).slice(0, 4)
        data[i] = props.data[i].close
    }

    if (props.data[i - 1].close >= props.data[0].close) {
        backgroundColor = 'rgba(33, 206, 153, 1)'
        percentChange = <div className="green">
                            <h1>SPY S&P 500 ETF</h1>
                            <h2>+{Math.round(props.data[i - 1].close / props.data[0].close * 10000) / 100 - 100}%</h2>
                        </div>
    } else {
        backgroundColor = 'rgba(33, 206, 153, 1)'
        percentChange = <div className="red">
                            <h1>SPY S&P 500 ETF</h1>
                            <h2>-{Math.round(props.data[0].close / props.data[i - 1].close * 10000) / 100 - 100}%</h2>
                        </div>
    }

    return (
        <div>
            {percentChange}
            <Line
                data={{
                    labels: chartxLabels,
                    datasets: [
                        {
                            label: "Price",
                            data: data,
                            backgroundColor: backgroundColor
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
                            },
                            ticks: {
                                display: true,
                                autoSkip: true,
                                maxTicksLimit: 16,
                                callback: function (value) {
                                    return value.slice(0, 4) + value.slice(7, 12)
                                }
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