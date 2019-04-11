import React from "react";
import Card from "../components/Card";

class AllCards extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          {this.props.cards.map((card, id) => {
            return <Card card={card} key={card.id} addCardToMyCards={this.props.addCardToMyCards}/>
          })}
          </div>
      </div>
    );
  }
}

export default AllCards;

// {console.log('first console log in allcards', this.props.cards['data'])}
//     AllCards: {this.props.cards.map(card => console.log(card))}
//     {this.props.cards.map(card => card.first_name)}
