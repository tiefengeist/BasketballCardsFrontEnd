import React from "react";
import AllCards from './AllCards'
import MyCards from './MyCards'

class CardsPage extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      cards: [],
      myCards: [],
      stuff: {
      firstName: '',
      lastName: '',
      teamName: ''}
    }
    // this.getData();
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


  render() {
    return (
      <div className="ui container">
        <MyCards myCards={this.state.myCards} removeCard={this.removeCard}/>
        {this.state.cards.length > 0 ? <AllCards cards = {this.state.cards} addCardToMyCards={this.addCardToMyCards} getFilteredData={this.getFilteredData}/> : 'loading...'}
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
