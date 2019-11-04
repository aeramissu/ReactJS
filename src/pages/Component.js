import React from 'react';
import ComponentA from '../components/ComponentA'
import ComponentB from '../components/ComponentB'
import ComponentC from '../components/ComponentC'

class ComponentExample extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            user: {
                name:'Julia'
            },
            counter : 0
        };
    }
    

    addFunction(number){
        this.setState({ counter: number+this.state.counter});
    }

    addArrowFunction = (number) => {
        this.setState({ counter: number+this.state.counter});
    }

    render(){
        return (
            <div className="component_example" style={componentPageStyle}>
                <ComponentA/>
                <ComponentA/>

                <ComponentB name={this.state.user.name} color={'blue'}/> 
                
                <ComponentC increment={10}  btnComponentClicked={this.addFunction.bind(this)}/>
                <ComponentC increment={5}   btnComponentClicked={this.addArrowFunction}/>

                {this.state.counter}
            </div>
        );
    }
  
}

const componentPageStyle = {
    display: 'grid',
    padding: '20px',
    gridGap: '10px'
}

export default ComponentExample;
