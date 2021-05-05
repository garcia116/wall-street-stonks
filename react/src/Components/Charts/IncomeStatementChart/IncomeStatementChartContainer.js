import React, { Component } from 'react';
import './IncomeStatementChartContainer.css';
import IncomeStatementChart from "../../Charts/IncomeStatementChart/IncomeStatementChart.js";


class IncomeStatementChartContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            incomeStatement: props.incomeStatement
        }
    }

    render() {
        return (
            <div className="income-statement-chart-container">
                <p>Revenue, Operating Expenses, & Income</p>
                <div className="income-statement-chart">
                    <IncomeStatementChart data={this.state.incomeStatement} />
                </div>
            </div>
        );
    }
}


export default IncomeStatementChartContainer;