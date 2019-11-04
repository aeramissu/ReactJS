import React, { Component } from 'react'

export default class IfExample extends Component {

    constructor(props){
        super(props);
        
        this.state = {
            isMorning: false
        }
    }

    render() {

        const value = this.state.isMorning ? <h1>Mayong Buntag</h1>:
            <h3>Hello !</h3>;

        return (
            <div className="if_example">
                {value}
            </div>
        )
    }
}





    // state = {
    //     isMorning: false
    // }
