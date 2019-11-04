import React from 'react';
import PropTypes from 'prop-types';

class ComponentB extends React.Component{

  getStyle = () =>{
    return {
        backgroundColor: this.props.color || 'white'
    }
  }

  render(){
    return (
    <div className="componentB" style={this.getStyle()}>
      Hello {this.props.name}
    </div>
    );
  }
  
}

// PropTypes
ComponentB.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
}

export default ComponentB;
