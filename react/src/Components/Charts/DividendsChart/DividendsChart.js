import React from "react";
import { Bar } from "react-chartjs-2";


const DividendsChart = (props) => {

    var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    var DividendData = [{}]
    var chartxLabels = [{}]
    var DividendDataBackgroundColor = [{}]
    var maxValue = 0

    for (var i = 0; i < props.dividends.length; i++) {
        chartxLabels[i] = month[Number((props.dividends[props.dividends.length - 1 - i].paymentDate).slice(5, 7)) - 1] + " " + Number((props.dividends[props.dividends.length - 1 - i].paymentDate).slice(8, 10)) + ", " + (props.dividends[props.dividends.length - 1 - i].paymentDate).slice(0, 4)
        DividendData[i] = props.dividends[props.dividends.length - 1 - i].amount
        if (DividendData[i] > maxValue) {
            maxValue = DividendData[i]
        }
        DividendDataBackgroundColor[i] = 'rgba(33, 206, 153, 1)'
    }

    return (
        <div className="chart">
            <Bar
                data={{
                    labels: chartxLabels,
                    datasets: [
                        {
                            label: "Dividend Paid",
                            data: DividendData,
                            backgroundColor: DividendDataBackgroundColor
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
                                tooltipItem.yLabel = tooltipItem.yLabel
                                label += tooltipItem.yLabel
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
                                beginAtZero: true,
                                suggestedMax: maxValue * 1.3,
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


export default DividendsChart;
