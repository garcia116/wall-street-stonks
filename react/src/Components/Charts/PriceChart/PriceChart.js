import React from "react";
import { Line } from "react-chartjs-2";

const PriceChart = (props) => {

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
        chartxLabels[i] = `Y${props.data[i].date}`
        data[i] = props.data[i].close
    }

    if (props.data[i - 1].close >= props.data[0].close) {
        backgroundColor = 'rgba(33, 206, 153, 1)'
        percentChange = <h1 className="green">+{Math.round(props.data[i - 1].close / props.data[0].close * 10000) / 100}%</h1>
    } else {
        backgroundColor = 'rgba(244, 84, 48, 1)'
        percentChange = <h1 className="red">-{Math.round(props.data[0].close / props.data[i - 1].close * 10000) / 100}%</h1>
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


export default PriceChart;