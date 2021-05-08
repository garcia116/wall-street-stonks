import React, { useState, useEffect, useMemo } from "react";
import styled from 'styled-components';
import axios from 'axios';
import Table from './Table.js';
import './Losers.css';

const Styles = styled.div`
table {
  width: 100%;
  border-spacing: 0;
  border: 1px solid black;
  tr {
    :last-child {
      td {
        border-bottom: 0;
      }
    }
  }
  th,
  td {
    font-size: .7em;
    margin: 0;
    padding: .5rem;
    border-bottom: 1px solid black;
    text-align: right;
    :last-child {
      border-right: 0;
    }
  }
}
`


function Losers() {
    const columns = useMemo(
        () => [
            {
                Header: 'TICKER',
                accessor: 'symbol'
            }
            , {
                Header: 'PRICE',
                accessor: 'iexRealtimePrice'
            }
            , {
                Header: 'CHANGE',
                accessor: 'change'
            }
            , {
                Header: 'PERCENT',
                accessor: 'changePercent'
            }
        ]
    )
    const [data, setData] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await axios("https://cloud.iexapis.com/stable/stock/market/list/losers?token=pk_2d87808402a3463ab504dac6eb52b540&listLimit=5");
            setData(result.data);
        })();
    }, []);

    return (
        <div className="losers-container" >
            <h3>Today's Biggest Losers</h3>
            <Styles>
                <Table
                    data={data}
                    columns={columns}
                />
            </Styles>
        </div>
    )
}

export default Losers;