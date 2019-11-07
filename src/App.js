import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import Header from './components/Header'

import VariablesExample from './pages/Variables'
import IfExample from './pages/If'
import ForExample from './pages/For'
import ComponentExample from './pages/Component'
import Home from './pages/Home';
import ButtonExample from './pages/Button';
import Exercise from './pages/Exercise';

class App extends React.Component{

  render(){
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={Home}/>
          <Route path="/variables" component={VariablesExample}/>
          <Route path="/if-example" component={IfExample}/>
          <Route path="/for-example" component={ForExample}/>
          <Route path="/button-example" component={ButtonExample}/>
          <Route path="/component-example" component={ComponentExample}/>
          <Route path="/exercise" component={Exercise}/>
        </div>
      </Router>   
    );
  }
}

export default App;