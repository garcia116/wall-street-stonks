import React from 'react';
import './SearchBox.css';

const SearchBox = ({ searchChange }) => {
    return (
        <div className='search-box'>
            <input
                type='search'
                placeholder='searching'
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;