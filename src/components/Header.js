import React from 'react';
import { Link } from 'react-router-dom'

class Header extends React.Component{

  render(){
    return (
      <header style={headerStyle} className="header">
        <Link style={exampleCategoryStyle} to='/'>React</Link> :
        <Link style={exampleCategoryStyle} to='variables'>Variables</Link>
        <Link style={exampleCategoryStyle} to='if-example'>If</Link>
        <Link style={exampleCategoryStyle} to='for-example'>For</Link>
        <Link style={exampleCategoryStyle} to='button-example'>Button</Link>
        <Link style={exampleCategoryStyle} to='component-example'>Component</Link>
        <Link style={exampleCategoryStyle} to='exercise'>Exercise</Link>
      </header>
    );
  }
  
}

const headerStyle = {
    color: 'white',
    backgroundColor:'#3c3131',
    fontSize: '16px',
    display: 'flex',
    height: '50px',
    alignItems: 'center'
}

const exampleCategoryStyle = {
  padding: '15px',
  color: 'white',
  textDecoration: 'none'
}
export default Header;
