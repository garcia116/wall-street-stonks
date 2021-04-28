import React from 'react';
import Card from './Card.js';

const CompanyBar = ({ companies }) => {
    return (
        <div>
            {
                companies.map((company, i) => {
                    return (
                        <Card
                            key={i}
                            name={companies[i].name}
                            email={companies[i].email}
                        />
                    );
                })
            }
        </div>
    );
}

export default CompanyBar;