import React from 'react'

const Card = props => {
  const {card} = props;
  let imageUrl = "/" + props.card.team_name.replace(/\s+/g, '').toLowerCase() + ".png";
  return (
    <div className="ui column">
      <div className="card-in-all-cards">
      <div
        className="ui card"
        key={card.id}
        onClick={(e) => props.addCardToMyCards(card.id)}
        >

        <div className="content">

          <div className="header">
          {props.card.first_name} {props.card.last_name}
          <div class="ui slide masked reveal image">
          {props.card.img !== null ? <img className="visible content" src={props.card.img} /> : <img className="visible content" src="http://blog.logomyway.com/wp-content/uploads/2017/01/nba-logo-design.jpg" />}
          <img className="hidden content" src={imageUrl} id="logos"/>
          </div>
          </div>
          <div className="meta text-wrap">
          {props.card.height_feet? `Height: ${props.card.height_feet}' ${props.card.height_inches}"`: null}
          </div>
          <div className="meta text-wrap">
          {props.card.weight_pounds? `Weight: ${props.card.weight_pounds}` : null}
          </div>
          <div className="meta text-wrap">
          {props.card.position ? `Position: ${props.card.position}` : `Position: G/F`}
          </div>
          <div className="meta text-wrap">
          <strong>{props.card.team_name}</strong>
          </div>
          <div className="meta text-wrap">
          <button className="addCardButton">Add/Remove Player</button>
          </div>
        </div>

      </div>
    </div>
    </div>
  )

}

export default Card
