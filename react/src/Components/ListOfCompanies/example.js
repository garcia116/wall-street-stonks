import React from 'react';

import ListOfCompanies from './ListOfCompanies.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function example() {
    return (
        <div className="Example">
            <div className="container">
                <table className="table mt-5">
                    <thead>
                    <tr>
                            <th>Ticker</th>
                            <th>Market Cap</th>
                            <th>Price</th>
                            <th>Change</th>
                    </tr>
                    </thead>
                    <tbody>
                        <ListOfCompanies ticker="aapl" />
                        <ListOfCompanies ticker="msft" />
                        <ListOfCompanies ticker="amzn" />
                        <ListOfCompanies ticker="goog" />
                        <ListOfCompanies ticker="fb" />
                        <ListOfCompanies ticker="tcehy" />
                        <ListOfCompanies ticker="tsla" />
                        <ListOfCompanies ticker="tsm" />
                        <ListOfCompanies ticker="baba" />
                        <ListOfCompanies ticker="aapl" />
                        <ListOfCompanies ticker="brk.b" />

                    </tbody>
                </table>
            </div>
        </div>

        )
}
export default example;