import React, { Component } from 'react';
import "./EachStock.css"

class EachStock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stock: []
        };
    }



    getCol() {
        if(this.props.change < 0){
            return({color: "red"})
        }else{
            return({color: "green"})
        }
    }


    render() {
        return (
            <div className='eachStock'>
                {this.props.stock && (
                    <div className='card'>                        
                        <div className="ticker-div">
                            <p className='card-title'>{this.props.stock}</p>
                            <button
                                onClick={() => this.props.handleRemove(this.props.stock)}
                                className='remove-button'
                            > remove
                            </button>
                        </div>
                        <div className="info">
                            <p className='card-price'>${this.props.price}</p>
                            <p className='card-change'
                               style={(this.props.change > 0)? {color: "green"}: {color: "red"}}
                            >{this.props.change} %</p>
                        </div>
                        
                    </div>
                )}
            </div>
            )
    }
}
export default EachStock;