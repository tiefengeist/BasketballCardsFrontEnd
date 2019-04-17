import React from "react";
import AllCards from './AllCards'
import MyCards from './MyCards'
import UserLogin from './UserLogin'


class CardsPage extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      cards: [],
      myCards: [],
      stuff: {
      firstName: '',
    },
    loggedIn: false,
    name: '',
    password: ''
    // this.getData();
  }
}

  componentDidMount() {
    this.getData()
    // this.getPics()
    // .then(data => console.log(this.state.cards))
    // .then(data => this.loadAllCards())
    // .then(data => console.log('from cdm', data))
  }

  getData = () => {
    return fetch('http://localhost:3000/api/v1/players')
    .then(response => response.json())
    // .then(console.log)
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

  // getPics = () => {
  //   return fetch('https://nba-players.herokuapp.com/players/James/LeBron')
  //   .then(response => response.json())
  //   .then(json => console.log(json))
  // }

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
    let playerInfo = {
     user_id: this.state.user_id,
     player1_first_name: '',
     player1_last_name: '',
     player1_team_name: '',
     player1_img: '',
     player2_first_name: '',
     player2_last_name: '',
     player2_team_name: '',
     player2_img: '',
     player3_first_name: '',
     player3_last_name: '',
     player3_team_name: '',
     player3_img: '',
     player4_first_name: '',
     player4_last_name: '',
     player4_team_name: '',
     player4_img: '',
     player5_first_name: '',
     player5_last_name: '',
     player5_team_name: '',
     player5_img: ''
   }
   this.state.myCards.forEach((player, idx) => {
     let playerKeys = Object.keys(player);

     playerKeys.forEach(key => {
       let newKey = `player${idx+1}_${key}`;
       Object.assign(playerInfo, {[newKey]: player[key]})
     });
   });
    
    fetchRequest('http://localhost:3000/api/v1/teams/', 'post', playerInfo)
  }


  render() {

    let renderer;

    if(this.state.loggedIn === false) {
      renderer = <UserLogin logMeIn={this.logMeIn}/>
    } else if (this.state.loggedIn === true) {

      if (this.state.cards.length > 0){
        renderer = <div><MyCards myCards={this.state.myCards} removeCard={this.removeCard} saveTeamObject={this.saveTeamObject}/>
                   <AllCards cards = {this.state.cards} addCardToMyCards={this.addCardToMyCards} getFilteredData={this.getFilteredData} />
                   </div>
                  }
      else {
        renderer =  <div><MyCards myCards={this.state.myCards} removeCard={this.removeCard} saveTeamObject={this.saveTeamObject}/><h4>Loading...</h4></div>
      }
    }


    return (
      <div className="ui container">

        {renderer}

      </div>
    )
  }
  }



export default CardsPage;

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
