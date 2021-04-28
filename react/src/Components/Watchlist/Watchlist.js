import React, { Component } from 'react';
import ajax from '../ajax.js';
import './Watchlist.css';
import Form from "./Form.js";
import iex from '../../config/iex.js'
import axios from 'axios';
import Stocks from './Stocks.js';

class WatchList extends Component {

    state = {
        searchStock:[],
        stockList: []
    }

    getStock = async (e) => {
         const stock = e.target.stockName.value;
        e.preventDefault();
function Watchlist() {
    return (
        <div className="watchlist-container">
            <h3>Watchlist</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Pulvinar elementum integer enim neque.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Pulvinar elementum integer enim neque.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Pulvinar elementum integer enim neque.</p>
        </div>
    )
}
>>>>>>> 4225d20b59a4264d40765875dc6b491fe4ddffcf

        const url = await fetch(`${iex.base_url}/stock/${stock}/quote?token=${iex.api_token}`)
        const result = await url.json();
        this.setState({ stockList: result })
        console.log(this.state.stockList)
    }

    render() {
        return (
            <div className="watchlist-container">
                <h3>Watch List</h3>
                <Form getStock={this.getStock} />
                <Stocks stockList={this.state.stockList} />
            </div>
        )
    }
}
export default WatchList;
