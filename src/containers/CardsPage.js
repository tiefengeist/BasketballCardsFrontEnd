import React from "react";
import AllCards from './AllCards'
import MyCards from './MyCards'

class CardsPage extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      cards: [],
      myCards: []
    }
    // this.getData();
  }

  componentDidMount() {
    this.getData()
    // this.getPics()
    .then(data => console.log(this.state.cards))
    // .then(data => this.loadAllCards())
    // .then(data => console.log('from cdm', data))
  }

  getData = () => {
    return fetch('https://www.balldontlie.io/api/v1/players')
    .then(response => response.json())
    .then(json =>
      this.setState({
      cards: json['data']
    }))
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
    } else {
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
      <div>
        <MyCards myCards={this.state.myCards} removeCard={this.removeCard}/>
        <AllCards cards = {this.state.cards} addCardToMyCards={this.addCardToMyCards}/>
      </div>
    )
  }

}

export default CardsPage;
