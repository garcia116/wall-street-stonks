import React, { Component } from 'react';
import "./EachStock.css"

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
                        <p className='card-title'>{this.props.stock}</p>
                        <div className="info">
                            <p className='card-price'>${this.props.price}</p>
                            <p className='card-change'>{this.props.change}</p>
                        </div>
                        {/* <button
                            onClick={() => this.props.handleRemove(this.props.stock)}
                            className='card-link remove btn-danger'
                        > Remove
                         </button> */}
                    </div>
                )}
            </div>
            )
    }
}
export default EachStock;