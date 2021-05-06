import React, { Component } from 'react';
import './EPSChartContainer.css';
import EPSChart from "../../Charts/EPSChart/EPSChart.js";


class EPSChartContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            incomeStatement: props.incomeStatement,
            sharesOutstanding: props.sharesOutstanding
        }
    }

    render() {
        return (
            <div className="eps-chart-container">
                <p>Earnings Per Share</p>
                <div className="eps-chart">
                    <EPSChart incomeStatement={this.state.incomeStatement} sharesOutstanding={this.state.sharesOutstanding} />
                </div>
            </div>
        );
    }
}


export default EPSChartContainer;