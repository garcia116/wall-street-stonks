// import React, { Component } from 'react';
// import EachStock from './EachStock.js'



// class Stocks extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             myStocks: []
//         };
//     }

//     handleRemove = stockName => {
//         console.log(stockName)
//         this.props.onStockRemove(stockName);
//     };

//     render() {
//         return (
//             <div className='mystocks_div'>
//                 <br></br>
//                 {this.props.stockList}
//                 <div className='mystocks'>
//                     {this.props.stockList &&
//                         this.props.stockList.map((stock, key) => (
//                             <EachStock
//                                 key={key}
//                                 stock={stock['symbol']}
//                                 price={stock['iexRealtimePrice']}
//                                 change={stock['change']}
//                                 handleRemove={this.handleRemove}
//                             />
//                         ))}
//                 </div>
//             </div>
//         );
//     }
// }
// export default Stocks;


import React, { Component } from 'react';
import EachStock from './EachStock.js';
import './Watchlist.css';


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
                <br></br>
                {this.props.stockList && <p className='yourList'></p>}
                <div className='mystocks'>
                    {this.props.stockList &&
                        this.props.stockList.map((stock, key) => (
                            <EachStock
                                key={key}
                                stock={stock['symbol']}
                                price={stock['iexRealtimePrice']}
                                change={stock['change']}
                                handleRemove={this.handleRemove}
                            />
                        ))}
                </div>
            </div>
        );
    }
}
export default Stocks;