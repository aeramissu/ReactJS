import React, { Component } from 'react'

export default class Exercise extends Component {

    constructor(props) {
        super(props);
        this.handleData = this.handleData.bind(this);
        this.state = {
            recipe: {
                title: "Crêpes",
                ingredients: ["eggs", "flour", "sugar"],
                rate: ''
            }
        }
    }

    handleData(data) {
        this.setState({
            recipe : {title: data,
                    ingredients: data},
            rate: data
        });
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
                            <li style={liStyle}>Display the ingredients</li>
                            <li style={liStyle}>
                                Add to the recipe object a element for know the complexity of the recipe,
                                this complexity need to be a number between 0 and 10.
                            </li>
                            <li style={liStyle}>
                                If the complexity is between 0 and 3 you need to display : "difficulty : EASY" <br />
                                If the complexity is more than 3 and less or equal than 7 you need to display : "difficulty : NORMAL" <br />
                                If the complexity is more than 7 you need to display : "difficulty : DIFFICULT"<br />

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
                    <h1 className="name">{this.state.recipe.title}</h1>
                    <p className="ingredients"> Ingredients:<br />
                        <br />
                        <li style={liStyle}>{this.state.recipe.ingredients[0]}</li>
                        <li style={liStyle}>{this.state.recipe.ingredients[1]}</li>
                        <li style={liStyle}>{this.state.recipe.ingredients[2]}</li>
                    </p>
                    <div>
                        <InputFoo i={this.handleData} />
                    </div>
                    <h5>Complexity Rate:<br />{this.state.rate}</h5>
                    <br />
                    {this.state.rate <= 3 ? (
                        <p>Difficulty: Easy</p>
                    ) : (this.state.rate <= 7 &&
                        <p>Difficulty: Normal</p>
                    ) || (this.state.rate >= 8 &&
                        <p>Difficulty: Difficult</p>
                    )}
                </div>
            </div>
        )
    }
}


class InputFoo extends React.Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        this.state = {
            inputField: ''
        };
    }

    submitHandler(evt) {
        evt.preventDefault();
        // pass the input field value to the event handler passed
        // as a prop by the parent (App)
        this.props.i(this.state.inputField);

        this.setState({
            inputField: ''
        });
    }

    handleChange(event) {
        this.setState({
            inputField: event.target.value
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input type="text"
                        id="theInput"
                        value={this.state.inputField}
                        onChange={this.handleChange} />
                    <input type="submit" />
                </form>
            </div>
        );
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