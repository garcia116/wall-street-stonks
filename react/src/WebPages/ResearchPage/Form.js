import React from 'react';

const Form = ({ getStock }) => (
    <form onSubmit={getStock}>
        <input className="form_inputs" type="text" name="stockName" />
        <button className="form_buttons"> Search </button>
    </form>
);
export default Form;