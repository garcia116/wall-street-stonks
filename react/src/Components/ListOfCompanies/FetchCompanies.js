import React, { useState, useEffect, useMemo } from "react";
import styled from 'styled-components';
import axios from 'axios';
import iex from '../../config/iex.js'

function FetchCompanies({ ticker }) {

    const [data, setData] = useState(ticker);
    useEffect(() => {
        (async () => {
            const url = `${iex.base_url}/stock/${ticker}/quote?token=${iex.api_token}`
            const result = await axios.get(url);
            setData(result.data);
        })();
    }, []);

    return (
        <tr>
            <td>{data.symbol}</td>
            <td>{data.marketCap}</td>
            <td>${data.iexRealtimePrice}</td>
            <td>{data.change}</td>

        </tr>

    );

};


export default FetchCompanies;