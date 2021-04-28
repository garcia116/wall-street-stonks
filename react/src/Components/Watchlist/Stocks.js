import React from 'react';

const Stocks = ({ stockList }) => (
    <div className="container">
        <div className="row">
            { [stockList].map((stock) => {
                return (
                    <div className="col-md-4" style={{ marginBottom: "2rem" }}>
                        <div className="recipes__box">
                            <div className="recipe__text">
                                <h5 className="recipes__title">
                                    {stock.symbol}
                                </h5>
                                <p className="recipes__subtitle">Price: <span>
                                    {stock.iexRealtimePrice}
                                </span></p>
                            </div>
                    
                        </div>
                    </div>
                );
            })}
        </div>
    </div>
);
export default Stocks;