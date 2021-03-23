import React, {Component} from "react";
import { Bar } from "react-chartjs-2";

class PERatioChart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            price: 0
        }
    }
    componentDidMount() {
        var sandboxMode = true
        var baseURL
        var token
        const price = '/stock/TSLA/price?&token='

        if (sandboxMode) {
            baseURL = 'https://sandbox.iexapis.com/v1'
            token = 'Tpk_a909e54fc2ab44ac976155957da2a605'
        }
        else {
            baseURL = 'https://cloud.iexapis.com/v1'
            token = 'pk_2d87808402a3463ab504dac6eb52b540'
        }

        const priceURL = baseURL + price + token

        fetch(priceURL)
            .then(response => response.json())
            .then(data => this.setState({ price: data }))
    }
    
    render() {
        // Number Dividers
        const thousand = 1000

        // Chart Data
        const chartxLabels = [
            `Y${this.props.data.income[11].fiscalYear} Q${this.props.data.income[11].fiscalQuarter}`,
            `Y${this.props.data.income[10].fiscalYear} Q${this.props.data.income[10].fiscalQuarter}`,
            `Y${this.props.data.income[9].fiscalYear} Q${this.props.data.income[9].fiscalQuarter}`,
            `Y${this.props.data.income[8].fiscalYear} Q${this.props.data.income[8].fiscalQuarter}`,
            `Y${this.props.data.income[7].fiscalYear} Q${this.props.data.income[7].fiscalQuarter}`,
            `Y${this.props.data.income[6].fiscalYear} Q${this.props.data.income[6].fiscalQuarter}`,
            `Y${this.props.data.income[5].fiscalYear} Q${this.props.data.income[5].fiscalQuarter}`,
            `Y${this.props.data.income[4].fiscalYear} Q${this.props.data.income[4].fiscalQuarter}`,
            `Y${this.props.data.income[3].fiscalYear} Q${this.props.data.income[3].fiscalQuarter}`,
            `Y${this.props.data.income[2].fiscalYear} Q${this.props.data.income[2].fiscalQuarter}`,
            `Y${this.props.data.income[1].fiscalYear} Q${this.props.data.income[1].fiscalQuarter}`,
            `Y${this.props.data.income[0].fiscalYear} Q${this.props.data.income[0].fiscalQuarter}`]

        const netIncomeData = [0,0,0]

        for (var i = 3; i <= 11; i++) {

            netIncomeData[i] = this.state.price / ((this.props.data.income[11 - i].netIncome +
                this.props.data.income[12 - i].netIncome +
                this.props.data.income[13 - i].netIncome +
                this.props.data.income[14 - i].netIncome) / this.props.data2)
            if (netIncomeData[i] < 0) {
                netIncomeData[i] = 0
            }
        }

        const netIncomeBackgroundColor = [
            'rgba(33, 206, 153, 1)', 'rgba(33, 206, 153, 1)', 'rgba(33, 206, 153, 1)',
            'rgba(33, 206, 153, 1)', 'rgba(33, 206, 153, 1)', 'rgba(33, 206, 153, 1)',
            'rgba(33, 206, 153, 1)', 'rgba(33, 206, 153, 1)', 'rgba(33, 206, 153, 1)',
            'rgba(33, 206, 153, 1)', 'rgba(33, 206, 153, 1)', 'rgba(33, 206, 153, 1)']
        return (
            <div className="chart">
                <p>P/E Ratio History</p>
                <Bar
                    data={{
                        labels: chartxLabels,
                        datasets: [
                            {
                                label: "P/E Ratio",
                                data: netIncomeData,
                                backgroundColor: netIncomeBackgroundColor
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
}


export default PERatioChart;