import React from "react";
import Card from "../components/Card";
import Form from "../components/Form";

class AllCardsNoPlayers extends React.Component {
  // constructor(props){
  //   super(props)
  // }

  render() {
    return (
      <div className="ui segment all-cards">
      <div className="ui header">Search For Players</div>
          <div className="ui four column grid">
          <Form getFilteredData={this.props.getFilteredData}/>
            <div className="row">
              {this.props.cards.map((card, id) => {
                return <Card card={card} key={card.id} addCardToMyCards={this.props.addCardToMyCards}/>
              })}
              </div>
          </div>

    </div>
    );
  }
}

export default AllCardsNoPlayers;
