import React, { useState, useEffect, useMemo } from "react";
import styled from 'styled-components';
import axios from 'axios';
import Table from './Table.js';
import './Gainers.css';

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
      font-size: 1vw;
      margin: 0;
      padding: 1rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;
      :last-child {
        border-right: 0;
      }
    }
  }
`




function Gainers() {


    const columns = useMemo(
        () => [
            {
                Header: 'SYMBOL',
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
            const result = await axios.get("https://cloud.iexapis.com/stable/stock/market/list/gainers?token=pk_2d87808402a3463ab504dac6eb52b540");
            setData(result.data);
        })();
    }, []);

    return (
        <div className="gainers-container">
            <h3>Today's Biggest Gainers</h3>
            <Styles>
                <Table
                    data={data}
                    columns={columns}
                />
            </Styles>
        </div>
    )
}

export default Gainers;