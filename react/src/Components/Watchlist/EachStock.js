import React, { Component } from 'react';

class EachStock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stock: []
        };
    }


    render() {
        return (
            <div className='eachStock'>
                {this.props.stock && (
                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='card-title'>{this.props.stock}</h5>
                            <h6 className='card-price'>{this.props.price}</h6>
                        </div>
                        <button
                            onClick={() => this.props.handleRemove(this.props.stock)}
                            className='card-link remove btn-danger'
                        > Remove
                         </button>
                    </div>
                )}

            </div>
            )
    }
}
export default EachStock;