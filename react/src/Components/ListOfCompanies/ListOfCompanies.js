import React, { Component } from "react";
import CompanyBar from './CompanyBar.js';
import SearchBox from './SearchBox.js';
import './ListOfCompanies.css';


class ListOfCompanies extends Component {
    constructor() {
        super()
        this.state = {
            companies: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ companies: users }));
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })
    }
    render() {
        const filteredCompanies = this.state.companies.filter(companies => {
            return companies.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        return (
            <div className='list-of-companies-container'>
                <SearchBox searchChange={this.onSearchChange} />
                <CompanyBar companies={filteredCompanies} />

            </div>
        );
    }
}

export default ListOfCompanies;