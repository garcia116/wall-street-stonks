import React from 'react';
import EachStock from './EachStock.js'



const Stocks = ({ stockList, onStockRemove }) => (

    
    <div className="container">
        <div className="row">
            {stockList && < h4 className='yourList'>Your List:</h4>}
            { stockList.map((stock, key) => {
                return (
                    <div className="col-md-4" style={{ marginBottom: "2rem" }}>
                            
                        <EachStock
                            key={key}
                            stock={stock['symbol']}
                            price={stock['iexRealtimePrice']}
                            handleRemove={stockName => {
                                onStockRemove(stockName);
                            }}
                       />
                      
                    </div>
                );
            })}
        </div>
    </div>
);
export default Stocks;