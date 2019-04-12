import React from 'react'

const Card = props => {
  const {card} = props;

  return (
    <div className="ui column">
      <div
        className="ui card"
        key={card.id}
        onClick={(e) => props.addCardToMyCards(card.id)}
        >
        <div className="content">
          <div className="header">
          {props.card.first_name}
          </div>
          <div className="meta text-wrap">
          Height: {props.card.height_feet}' {props.card.height_inches}"
          </div>
          <div className="meta text-wrap">
          {props.card.team.full_name}
          </div>
        </div>
      </div>
    </div>
  )

}

export default Card
