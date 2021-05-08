import React from 'react';

const Form = ({ getStock }) => (
    <div className="add-to-watchlist">
        <form onSubmit={getStock}>
            <input className="form_inputs" type="text" name="stockName"/>
            <button className="form_buttons"> Add </button>
        </form>
    </div>    
);

export default Form;