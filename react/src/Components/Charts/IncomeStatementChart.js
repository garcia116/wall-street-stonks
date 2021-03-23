import React from "react";
import { Bar } from "react-chartjs-2";

const IncomeStatementChart = (props) => {
    // Number Dividers
    const thousand = 1000
    const million = 1000000
    const billion = 1000000000
    const trillion = 1000000000000
    const quadrillion = 1000000000000000

    // Chart Data
    const chartxLabels = [
        `Y${props.data.income[11].fiscalYear} Q${props.data.income[11].fiscalQuarter}`,
        `Y${props.data.income[10].fiscalYear} Q${props.data.income[10].fiscalQuarter}`,
        `Y${props.data.income[9].fiscalYear} Q${props.data.income[9].fiscalQuarter}`,
        `Y${props.data.income[8].fiscalYear} Q${props.data.income[8].fiscalQuarter}`,
        `Y${props.data.income[7].fiscalYear} Q${props.data.income[7].fiscalQuarter}`,
        `Y${props.data.income[6].fiscalYear} Q${props.data.income[6].fiscalQuarter}`,
        `Y${props.data.income[5].fiscalYear} Q${props.data.income[5].fiscalQuarter}`,
        `Y${props.data.income[4].fiscalYear} Q${props.data.income[4].fiscalQuarter}`,
        `Y${props.data.income[3].fiscalYear} Q${props.data.income[3].fiscalQuarter}`,
        `Y${props.data.income[2].fiscalYear} Q${props.data.income[2].fiscalQuarter}`,
        `Y${props.data.income[1].fiscalYear} Q${props.data.income[1].fiscalQuarter}`,
        `Y${props.data.income[0].fiscalYear} Q${props.data.income[0].fiscalQuarter}`]

    const revenueData = [
        props.data.income[11].totalRevenue,
        props.data.income[10].totalRevenue,
        props.data.income[9].totalRevenue,
        props.data.income[8].totalRevenue,
        props.data.income[7].totalRevenue,
        props.data.income[6].totalRevenue,
        props.data.income[5].totalRevenue,
        props.data.income[4].totalRevenue,
        props.data.income[3].totalRevenue,
        props.data.income[2].totalRevenue,
        props.data.income[1].totalRevenue,
        props.data.income[0].totalRevenue]
    const revenueBackgroundColor = [
        'rgba(33, 109, 208, 1)', 'rgba(33, 109, 208, 1)', 'rgba(33, 109, 208, 1)',
        'rgba(33, 109, 208, 1)', 'rgba(33, 109, 208, 1)', 'rgba(33, 109, 208, 1)',
        'rgba(33, 109, 208, 1)', 'rgba(33, 109, 208, 1)', 'rgba(33, 109, 208, 1)',
        'rgba(33, 109, 208, 1)', 'rgba(33, 109, 208, 1)', 'rgba(33, 109, 208, 1)']

    const operatingExpenses = [
        props.data.income[11].operatingExpense,
        props.data.income[10].operatingExpense,
        props.data.income[9].operatingExpense,
        props.data.income[8].operatingExpense,
        props.data.income[7].operatingExpense,
        props.data.income[6].operatingExpense,
        props.data.income[5].operatingExpense,
        props.data.income[4].operatingExpense,
        props.data.income[3].operatingExpense,
        props.data.income[2].operatingExpense,
        props.data.income[1].operatingExpense,
        props.data.income[0].operatingExpense]
    const operatingExpensesBackgroundColor = [
        'rgba(208, 208, 33, 1)', 'rgba(208, 208, 33, 1)', 'rgba(208, 208, 33, 1)',
        'rgba(208, 208, 33, 1)', 'rgba(208, 208, 33, 1)', 'rgba(208, 208, 33, 1)',
        'rgba(208, 208, 33, 1)', 'rgba(208, 208, 33, 1)', 'rgba(208, 208, 33, 1)',
        'rgba(208, 208, 33, 1)', 'rgba(208, 208, 33, 1)', 'rgba(208, 208, 33, 1)']

    const grossProfitData = [
        props.data.income[11].grossProfit,
        props.data.income[10].grossProfit,
        props.data.income[9].grossProfit,
        props.data.income[8].grossProfit,
        props.data.income[7].grossProfit,
        props.data.income[6].grossProfit,
        props.data.income[5].grossProfit,
        props.data.income[4].grossProfit,
        props.data.income[3].grossProfit,
        props.data.income[2].grossProfit,
        props.data.income[1].grossProfit,
        props.data.income[0].grossProfit]
    const grossProfitBackgroundColor = [
        'rgba(244, 84, 48, 1)', 'rgba(244, 84, 48, 1)', 'rgba(244, 84, 48, 1)',
        'rgba(244, 84, 48, 1)', 'rgba(244, 84, 48, 1)', 'rgba(244, 84, 48, 1)',
        'rgba(244, 84, 48, 1)', 'rgba(244, 84, 48, 1)', 'rgba(244, 84, 48, 1)',
        'rgba(244, 84, 48, 1)', 'rgba(244, 84, 48, 1)', 'rgba(244, 84, 48, 1)']

    const operatingIncomeData = [
        props.data.income[11].operatingIncome,
        props.data.income[10].operatingIncome,
        props.data.income[9].operatingIncome,
        props.data.income[8].operatingIncome,
        props.data.income[7].operatingIncome,
        props.data.income[6].operatingIncome,
        props.data.income[5].operatingIncome,
        props.data.income[4].operatingIncome,
        props.data.income[3].operatingIncome,
        props.data.income[2].operatingIncome,
        props.data.income[1].operatingIncome,
        props.data.income[0].operatingIncome]
    const operatingIncomeBackgroundColor = [
        'rgba(125, 30, 210, 1)', 'rgba(125, 30, 210, 1)', 'rgba(125, 30, 210, 1)',
        'rgba(125, 30, 210, 1)', 'rgba(125, 30, 210, 1)', 'rgba(125, 30, 210, 1)',
        'rgba(125, 30, 210, 1)', 'rgba(125, 30, 210, 1)', 'rgba(125, 30, 210, 1)',
        'rgba(125, 30, 210, 1)', 'rgba(125, 30, 210, 1)', 'rgba(125, 30, 210, 1)']

    const netIncomeData = [
        props.data.income[11].netIncome,
        props.data.income[10].netIncome,
        props.data.income[9].netIncome,
        props.data.income[8].netIncome,
        props.data.income[7].netIncome,
        props.data.income[6].netIncome,
        props.data.income[5].netIncome,
        props.data.income[4].netIncome,
        props.data.income[3].netIncome,
        props.data.income[2].netIncome,
        props.data.income[1].netIncome,
        props.data.income[0].netIncome]
    const netIncomeBackgroundColor = [
        'rgba(33, 206, 153, 1)', 'rgba(33, 206, 153, 1)', 'rgba(33, 206, 153, 1)',
        'rgba(33, 206, 153, 1)', 'rgba(33, 206, 153, 1)', 'rgba(33, 206, 153, 1)',
        'rgba(33, 206, 153, 1)', 'rgba(33, 206, 153, 1)', 'rgba(33, 206, 153, 1)',
        'rgba(33, 206, 153, 1)', 'rgba(33, 206, 153, 1)', 'rgba(33, 206, 153, 1)']

    return (
        <div className="chart">
            <p>Revenue, Operating Expenses, & Income</p>
            <Bar
                data={{
                    labels: chartxLabels,
                    datasets: [
                        {
                            label: "Revenue",
                            data: revenueData,
                            backgroundColor: revenueBackgroundColor
                        },
                        {
                            label: "Operating Expenses",
                            data: operatingExpenses,
                            backgroundColor: operatingExpensesBackgroundColor
                        },
                        {
                            label: "Gross Profit",
                            data: grossProfitData,
                            backgroundColor: grossProfitBackgroundColor
                        },
                        {
                            label: "Operating Income",
                            data: operatingIncomeData,
                            backgroundColor: operatingIncomeBackgroundColor

                        },
                        {
                            label: "Net Income",
                            data: netIncomeData,
                            backgroundColor: netIncomeBackgroundColor
                        },
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


export default IncomeStatementChart;