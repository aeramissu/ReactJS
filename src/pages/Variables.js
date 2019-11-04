import React from 'react';

class VariablesExample extends React.Component{

    constructor(props){
        super(props);
        
        this.state = {
            message: 'Mayong Hapon'
        }

        this.userName= 'Marine'
    }

    render(){
        return (
            <div className="variables_example">
                {this.state.message} 
                {this.userName}
            </div>
        );
    }
  
}

export default VariablesExample;











    // state = {
    //     message: 'Mayong Buntag'
    // }
