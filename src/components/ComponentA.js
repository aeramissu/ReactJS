import React from 'react';

export default class ComponentA extends React.Component{
    
    render(){
        return (
        <div className="componentA" style={itemStyle}>
             I am the Component A
        </div>
        );
    }
  
}

const itemStyle = {
    backgroundColor : 'red'
}
