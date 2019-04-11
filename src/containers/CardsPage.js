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
    console.log('literally anything please show!!!')
    this.getData()
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


  render() {
    return (
      <div>
        <MyCards myCards={this.state.myCards}/>
        <AllCards cards = {this.state.cards} addCardToMyCards={this.addCardToMyCards}/>
      </div>
    )
  }

}

export default CardsPage;
