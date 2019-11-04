import React, { Component } from 'react'

export default class ButtonExample extends Component {

    constructor(props){
        super(props);    
        this.state = {
            counter: 0
        }
    }

    add(){
        this.setState({ counter: this.state.counter+1})
    }

    addArrowFunction = () => {
        this.setState({ counter: this.state.counter+1})
    }

    render() {
        return (
            <div className='buttonPage'style={buttonPageStyle}>
                <button onClick={this.add.bind(this)}>Button 1</button>
                <button onClick={this.addArrowFunction}>Button 2</button>    
                {this.state.counter}          
            </div>
        )
    }
}

const buttonPageStyle = {
    padding: '20px'
}

