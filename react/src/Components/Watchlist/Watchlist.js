import React, { Component } from 'react';
import './Watchlist.css';
import Form from "./Form.js";
import iex from '../../config/iex.js'
import Stocks from './Stocks.js';

class WatchList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchStock: '',
            stockList: []
        };
    }

    getStock = async (e) => {
        
        const stock = e.target.stockName.value;
        e.preventDefault();

        const url = await fetch(`${iex.base_url}/stock/${stock}/quote?token=${iex.api_token}`)
        const result = await url.json()
        this.setState({
            stockList: this.state.stockList.concat(result)
        })
        console.log(this.state.stockList)
    }

    onStockRemoveHandler = stockName => {
        const currState = [...this.state.stockList];
        var index = this.state.stockList.indexOf(stockName);
            currState.splice(index, 1);
            this.setState({ stockList: currState })
        
    }

    render() {
        return (
            <div className="watchlist-container">
                <h3>Watch List</h3>
                <Form getStock={this.getStock} />
                <Stocks
                    stockList={this.state.stockList}
                    onStockRemove={this.onStockRemoveHandler}
                />
            </div>
        )
    }
}
export default WatchList;
