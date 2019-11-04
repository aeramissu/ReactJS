import React from 'react';

class ForExample extends React.Component{
    
    constructor(props){
        super(props);    
        this.state = {
            todos: [
                { id: 1, text:'Learn JS'},
                { id: 2, text:'Learn React'},
                { id: 3, text:'Create website'}
            ]
        }
    }

    render(){
        const list = this.state.todos.map(element =>
            <li key={element.id}>{element.text}</li>);

        return (
            <ul>
                {list}
            </ul>
        )
    }
  
}

export default ForExample;



// state = {
    //     todos: [
    //         { id: 1, text:'Learn JS'},
    //         { id: 2, text:'Learn React'},
    //         { id: 3, text:'Create website'}
    //     ]
    // }
