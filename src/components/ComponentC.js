import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class ComponentC extends Component {

    render() {
        return (
            <div className='componentC'>
                <button onClick={this.props.btnComponentClicked.bind(this, this.props.increment)}>Click</button>                
            </div>
        )
    }
    
}

// PropTypes
ComponentC.propTypes = {
    increment: PropTypes.number.isRequired,
}