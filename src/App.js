import React, { Component } from 'react';
import './App.css';
import CardsPage from './containers/CardsPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <CardsPage />
        </header>
      </div>
    );
  }
}

export default App;

// <div className="ui image"> 
//   <img src = {props.}/>
// </div>
