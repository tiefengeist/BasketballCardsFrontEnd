import React, { Component } from 'react';
import './App.css';
import CardsPage from './containers/CardsPage'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MyTeams from './components/MyTeams'


class App extends Component {
  render() {
    return (
      <div className="App">  
        <Router>
          <Switch>
            <header className="App-header">
            <Route exact path= '/' component={()=> <CardsPage />}/>
            <Route path= '/Teams' component={()=> <MyTeams />}/>

            </header>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
// <Router>
//   <div>
//   </div>
//   <Route exact path='/' component={CardsPage} />
//   <Route path='/MyTeams' component={MyTeams}/>
//   </Router>
