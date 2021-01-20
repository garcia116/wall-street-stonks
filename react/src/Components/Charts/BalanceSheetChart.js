import React from "react";
import { Bar } from "react-chartjs-2";

const BalanceSheetChart = (props) => {
    // Number Dividers
    const thousand = 1000
    const million = 1000000
    const billion = 1000000000
    const trillion = 1000000000000
    const quadrillion = 1000000000000000

    // Chart Data
    const chartxLabels = [
        `Y${props.data.balancesheet[11].fiscalYear} Q${props.data.balancesheet[11].fiscalQuarter}`,
        `Y${props.data.balancesheet[10].fiscalYear} Q${props.data.balancesheet[10].fiscalQuarter}`,
        `Y${props.data.balancesheet[9].fiscalYear} Q${props.data.balancesheet[9].fiscalQuarter}`,
        `Y${props.data.balancesheet[8].fiscalYear} Q${props.data.balancesheet[8].fiscalQuarter}`,
        `Y${props.data.balancesheet[7].fiscalYear} Q${props.data.balancesheet[7].fiscalQuarter}`,
        `Y${props.data.balancesheet[6].fiscalYear} Q${props.data.balancesheet[6].fiscalQuarter}`,
        `Y${props.data.balancesheet[5].fiscalYear} Q${props.data.balancesheet[5].fiscalQuarter}`,
        `Y${props.data.balancesheet[4].fiscalYear} Q${props.data.balancesheet[4].fiscalQuarter}`,
        `Y${props.data.balancesheet[3].fiscalYear} Q${props.data.balancesheet[3].fiscalQuarter}`,
        `Y${props.data.balancesheet[2].fiscalYear} Q${props.data.balancesheet[2].fiscalQuarter}`,
        `Y${props.data.balancesheet[1].fiscalYear} Q${props.data.balancesheet[1].fiscalQuarter}`,
        `Y${props.data.balancesheet[0].fiscalYear} Q${props.data.balancesheet[0].fiscalQuarter}`]

    const currentAssetsData = [
        props.data.balancesheet[11].currentAssets,
        props.data.balancesheet[10].currentAssets,
        props.data.balancesheet[9].currentAssets,
        props.data.balancesheet[8].currentAssets,
        props.data.balancesheet[7].currentAssets,
        props.data.balancesheet[6].currentAssets,
        props.data.balancesheet[5].currentAssets,
        props.data.balancesheet[4].currentAssets,
        props.data.balancesheet[3].currentAssets,
        props.data.balancesheet[2].currentAssets,
        props.data.balancesheet[1].currentAssets,
        props.data.balancesheet[0].currentAssets]
    const currentAssetsBackgroundColor = [
        'rgba(33, 109, 208, 1)', 'rgba(33, 109, 208, 1)', 'rgba(33, 109, 208, 1)',
        'rgba(33, 109, 208, 1)', 'rgba(33, 109, 208, 1)', 'rgba(33, 109, 208, 1)',
        'rgba(33, 109, 208, 1)', 'rgba(33, 109, 208, 1)', 'rgba(33, 109, 208, 1)',
        'rgba(33, 109, 208, 1)', 'rgba(33, 109, 208, 1)', 'rgba(33, 109, 208, 1)']

    const cashData = [
        props.data.balancesheet[11].currentCash,
        props.data.balancesheet[10].currentCash,
        props.data.balancesheet[9].currentCash,
        props.data.balancesheet[8].currentCash,
        props.data.balancesheet[7].currentCash,
        props.data.balancesheet[6].currentCash,
        props.data.balancesheet[5].currentCash,
        props.data.balancesheet[4].currentCash,
        props.data.balancesheet[3].currentCash,
        props.data.balancesheet[2].currentCash,
        props.data.balancesheet[1].currentCash,
        props.data.balancesheet[0].currentCash]

    const cashBackgroundColor = [
        'rgba(33, 206, 153, 1)', 'rgba(33, 206, 153, 1)', 'rgba(33, 206, 153, 1)',
        'rgba(33, 206, 153, 1)', 'rgba(33, 206, 153, 1)', 'rgba(33, 206, 153, 1)',
        'rgba(33, 206, 153, 1)', 'rgba(33, 206, 153, 1)', 'rgba(33, 206, 153, 1)',
        'rgba(33, 206, 153, 1)', 'rgba(33, 206, 153, 1)', 'rgba(33, 206, 153, 1)']

    const longTermDebtData = [
        props.data.balancesheet[11].longTermDebt,
        props.data.balancesheet[10].longTermDebt,
        props.data.balancesheet[9].longTermDebt,
        props.data.balancesheet[8].longTermDebt,
        props.data.balancesheet[7].longTermDebt,
        props.data.balancesheet[6].longTermDebt,
        props.data.balancesheet[5].longTermDebt,
        props.data.balancesheet[4].longTermDebt,
        props.data.balancesheet[3].longTermDebt,
        props.data.balancesheet[2].longTermDebt,
        props.data.balancesheet[1].longTermDebt,
        props.data.balancesheet[0].longTermDebt]
    const longTermDebtBackgroundColor = [
        'rgba(244, 84, 48, 1)', 'rgba(244, 84, 48, 1)', 'rgba(244, 84, 48, 1)',
        'rgba(244, 84, 48, 1)', 'rgba(244, 84, 48, 1)', 'rgba(244, 84, 48, 1)',
        'rgba(244, 84, 48, 1)', 'rgba(244, 84, 48, 1)', 'rgba(244, 84, 48, 1)',
        'rgba(244, 84, 48, 1)', 'rgba(244, 84, 48, 1)', 'rgba(244, 84, 48, 1)']

    const totalCurrentLiabilitiesData = [
        props.data.balancesheet[11].currentLongTermDebt,
        props.data.balancesheet[10].currentLongTermDebt,
        props.data.balancesheet[9].currentLongTermDebt,
        props.data.balancesheet[8].currentLongTermDebt,
        props.data.balancesheet[7].currentLongTermDebt,
        props.data.balancesheet[6].currentLongTermDebt,
        props.data.balancesheet[5].currentLongTermDebt,
        props.data.balancesheet[4].currentLongTermDebt,
        props.data.balancesheet[3].currentLongTermDebt,
        props.data.balancesheet[2].currentLongTermDebt,
        props.data.balancesheet[1].currentLongTermDebt,
        props.data.balancesheet[0].currentLongTermDebt]
    const totalCurrentLiabilitiesBackgroundColor = [
        'rgba(125, 30, 210, 1)', 'rgba(125, 30, 210, 1)', 'rgba(125, 30, 210, 1)',
        'rgba(125, 30, 210, 1)', 'rgba(125, 30, 210, 1)', 'rgba(125, 30, 210, 1)',
        'rgba(125, 30, 210, 1)', 'rgba(125, 30, 210, 1)', 'rgba(125, 30, 210, 1)',
        'rgba(125, 30, 210, 1)', 'rgba(125, 30, 210, 1)', 'rgba(125, 30, 210, 1)']

    return (
        <div className="chart">
            <p>Assets & Liabilities</p>
            <Bar
                data={{
                    labels: chartxLabels,
                    datasets: [
                        {
                            label: "Current Assets",
                            data: currentAssetsData,
                            backgroundColor: currentAssetsBackgroundColor
                        },
                        {
                            label: "Cash",
                            data: cashData,
                            backgroundColor: cashBackgroundColor
                        },
                        {
                            label: "Long Term Debt",
                            data: longTermDebtData,
                            backgroundColor: longTermDebtBackgroundColor
                        },
                        {
                            label: "Current Liabilities",
                            data: totalCurrentLiabilitiesData,
                            backgroundColor: totalCurrentLiabilitiesBackgroundColor
                        }
                    ]
                }}
                options={{
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


export default BalanceSheetChart;