import React from 'react';

const Card = (props) => {
    const { name, id, email } = props;

    return (
        <div>
            <div>
                <h2> {name} </h2>
                <p> {email} </p>
            </div>
        </div>
    );
}

export default Card;    