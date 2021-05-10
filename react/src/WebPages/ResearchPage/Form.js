import React from 'react';

const Form = ({ getStock }) => (
    <div className="load-company">
        <form onSubmit={getStock}>
            <input className="form_inputs" type="text" name="stockName" placeholder="Enter Ticker Symbol"/>
            <button className="form_buttons"> Enter </button>
        </form>
    </div> 
);
export default Form;