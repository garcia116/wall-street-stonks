import React from 'react';
import FetchCompanies from './FetchCompanies.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ListOfCompanies.css';


function ListOfCompanies() {
    return (
        <div className="Example">
            
            <div className="list-of-companies-container">
                <h3>List of Companies</h3>
                <table className="table mt-5">
                    <thead>
                    <tr>
                            <th>Ticker</th>
                            <th>Market Cap</th>
                            <th>Price</th>
                            <th>Change +/-</th>
                    </tr>
                    </thead>
                    <tbody>
                        <FetchCompanies ticker="aapl" />
                        <FetchCompanies ticker="msft" />
                        <FetchCompanies ticker="amzn" />
                        <FetchCompanies ticker="goog" />
                        <FetchCompanies ticker="fb" />
                        <FetchCompanies ticker="tcehy" />
                        <FetchCompanies ticker="tsla" />
                        <FetchCompanies ticker="tsm" />
                        <FetchCompanies ticker="baba" />
                        <FetchCompanies ticker="brk.b" />

                    </tbody>
                </table>
            </div>
        </div>

        )
}
export default ListOfCompanies;