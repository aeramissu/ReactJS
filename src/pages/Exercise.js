import React, { Component } from 'react'

export default class Exercise extends Component {

    constructor(props){
        super(props);    
        this.state = {
            recipe : {
                title: "Crêpes",
                ingredients: [ "eggs", "flour", "sugar"]
            }
        }
    }

    render() {
        return (
            <div className="exercisePage" style={exercisePageStyle}>
                {/* For the template part you need to work inside the TODO don't touche to the instructions line part 
                --------- Instructions */}
                <div className="requirementContent" style={requirementContentStyle}>
                    <div className="titleRequirement">Instructions</div>
                    <div className="requirements">
                        <ol>
                            <li style={liStyle}>Display the recipe's title in the middle of the page and in bold</li>
                            <li style={liStyle}>Display the ingredients using 'v-for'</li>
                            <li style={liStyle}>
                                Add to the recipe object a element for know the complexity of the recipe,
                                this complexity need to be a number between 0 and 10.
                            </li>
                            <li style={liStyle}>
                                If the complexity is between 0 and 3 you need to display : "difficulty : EASY" <br/>
                                If the complexity is more than 3 and less or equal than 7 you need to display : "difficulty : NORMAL" <br/>
                                If the complexity is more than 7 you need to display : "difficulty : DIFFICULT"<br/>
                                Use 'v-if'
                            </li>
                            <li style={liStyle}>
                                Oops ! I forget the milk, add this ingredient when you click on a button.
                            </li>
                        </ol>
                    </div>
                </div>
                {/* --------- End Of the Instructions part */}

                <div className='exerciseResultPart'>
                {/* TODO */}
                </div>
            </div>
        )
    }
}

const exercisePageStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
    height: 'calc(100% - 50px)'
}

const requirementContentStyle = {
  padding: '20px',
  backgroundColor: '#e8e5dd'
}

const liStyle = {
  paddingBottom: '10px'
}