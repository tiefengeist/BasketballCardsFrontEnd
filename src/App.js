import React, { Component } from 'react';
import './App.css';
import CardsPage from './containers/CardsPage'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MyTeams from './containers/MyTeams'
// import AllCards from './containers/AllCards'
// import MyCards from './containers/MyCards'
// import UserLogin from './containers/UserLogin'


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cards: [],
      teams: [],
      myCards: [],
      stuff: {
      firstName: '',
    },
    loggedIn: false,
    name: '',
    password: ''
  }
}

  componentDidMount() {
    this.getData()
  }





  getData = () => {
    return fetch('http://localhost:3000/api/v1/players')
    .then(response => response.json())
    .then(json =>
      this.setState({
      cards: json
    }))
  }

  logMeIn = (ev) => {
    ev.preventDefault()
    let uservalue = ev.target.userName.value
    let passwordvalue = ev.target.password.value
    let data = {
      name: uservalue,
      password: passwordvalue
    }
    this.setState(data)
    this.setState({loggedIn: true})
    fetchRequest('http://localhost:3000/api/v1/users/', 'post', data)
    .then(res => res.json())
    .then(json => this.setState({user_id: json.id}))
  }

  logMeOut = (ev) => {
    this.setState({loggedIn: false})
  }

  getFilteredData = (ev) => {
    ev.preventDefault();
    let data = {
      firstName: ev.target.firstName.value,
    }
    this.setState(data
    )
    fetchRequest('http://localhost:3000/api/v1/players', 'post', data)
    .then(res => res.json())
    .then( json =>
      this.setState({cards: json})
    )
  }

  addCardToMyCards = (e) => {
    let newCard = this.state.cards.find(card => {return card.id === e})
    if (this.state.myCards.includes(newCard)) {
      return
    }
      else if (this.state.myCards.length > 4) {
        return null
      }
     else {
      this.setState({
        myCards: [...this.state.myCards, newCard]
      })
    }
  }

  removeCard = (e) => {
    console.log(e)
    const removedCard = this.state.myCards.filter(card => {
      return card.id !== e
    })
    this.setState({
      myCards: removedCard
    })
  }

  saveTeamObject = (ev) => {
    ev.preventDefault();
    let playerInfo = {
     user_id: this.state.user_id,
     team_name: ev.target.teamName.value,
     player1_first_name: '',
     player1_last_name: '',
     player1_team_name: '',
     player1_img: '',
     player1_id: 0,
     player2_first_name: '',
     player2_last_name: '',
     player2_team_name: '',
     player2_img: '',
     player2_id: 0,
     player3_first_name: '',
     player3_last_name: '',
     player3_team_name: '',
     player3_img: '',
     player3_id: 0,
     player4_first_name: '',
     player4_last_name: '',
     player4_team_name: '',
     player4_img: '',
     player4_id: 0,
     player5_first_name: '',
     player5_last_name: '',
     player5_team_name: '',
     player5_img: '',
     player5_id: 0
   }
   if(this.state.myCards.length === 5)
     {this.state.myCards.forEach((player, idx) => {
       let playerKeys = Object.keys(player);

       playerKeys.forEach(key => {
         let newKey = `player${idx+1}_${key}`;
         Object.assign(playerInfo, {[newKey]: player[key]})
       });
     });

      fetchRequest('http://localhost:3000/api/v1/teams/', 'post', playerInfo)
      .then(this.setState({myCards: []}))}
      else {
        alert("You need five players!")
      }

  }


  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <header className="App-header">
              <Route exact path= '/' component={()=> <CardsPage logMeOut={this.logMeOut} loggedIn={this.state.loggedIn} myCards={this.state.myCards} removeCard={this.removeCard} saveTeamObject={this.saveTeamObject} cards = {this.state.cards} addCardToMyCards={this.addCardToMyCards} getFilteredData={this.getFilteredData} logMeIn={this.logMeIn} />}/>
              <Route path= '/Teams' component={()=> <MyTeams myCards={this.state.myCards} user_id={this.state.user_id} getMyTeams={this.getMyTeams} teams={this.state.teams} user_id={this.state.user_id}/>}/>
            </header>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

function fetchRequest(URL, method, data={}) {
  const initial = {headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
    },
    method: method,
    body: JSON.stringify(data)
  }
                if (method.toLowerCase() === 'get') delete initial.body;
                  else if (method.toLowerCase() === 'post' && initial.body.id) delete initial.body.id;
                return fetch(URL, initial);
}
// <Router>
//   <div>
//   </div>
//   <Route exact path='/' component={CardsPage} />
//   <Route path='/MyTeams' component={MyTeams}/>
//   </Router>
