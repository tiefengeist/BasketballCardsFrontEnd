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
          {props.card.first_name} {props.card.last_name}

          </div>
          <div className="meta text-wrap">
          {props.card.height_feet? `Height: ${props.card.height_feet}' ${props.card.height_inches}"`: null}
          </div>
          <div className="meta text-wrap">
          {props.card.weight_pounds? `Weight: ${props.card.weight_pounds}` : null}
          </div>
          <div className="meta text-wrap">
          Position: {props.card.position}
          </div>
          <div className="meta text-wrap">
          <strong>{props.card.team.full_name}</strong>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Card
