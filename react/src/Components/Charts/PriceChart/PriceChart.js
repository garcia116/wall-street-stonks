import React from "react";
import { Line } from "react-chartjs-2";

const PriceChart = (props) => {

    var chartxLabels = [{}]
    var data = [{}]
    var backgroundColor = [{}]
    const daysIn5Years = 5 * 365 + 2;
    for (var i = 0; i < daysIn5Years; i++) {
        if (typeof props.data[i] === 'undefined') {
            break;
        }
        chartxLabels[i] = ' '//`Y${props.data[i].date}`
        data[i] = props.data[i].close
        backgroundColor[i] = 'rgba(33, 109, 208, 1)'
    }

    return (
        <div>
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