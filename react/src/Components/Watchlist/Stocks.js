import React, { Component } from 'react';
import EachStock from './EachStock.js'



class Stocks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myStocks: []
        };
    }

    handleRemove = stockName => {
        console.log(stockName)
        this.props.onStockRemove(stockName);
    };

    render() {
        return (
            <div className='mystocks_div'>
                {this.props.stockList && <h4 className='yourList'>Your List:</h4>}
                <div className='mystocks'>
                    {this.props.stockList &&
                        this.props.stockList.map((stock, key) => (
                            <EachStock
                                key={key}
                                stock={stock['symbol']}
                                price={stock['iexRealtimePrice']}
                                handleRemove={this.handleRemove}
                            />
                        ))}
                </div>
            </div>
        );
    }
}
export default Stocks;