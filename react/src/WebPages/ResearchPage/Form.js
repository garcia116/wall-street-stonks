import React from 'react';

const Form = ({ getStock }) => (
    <form onSubmit={getStock} onload="MSFT">
        <input className="form_inputs" type="text" name="stockName" placeholder="Enter Ticker Symbol"/>
        <button className="form_buttons"> Enter </button>
    </form>
);
export default Form;