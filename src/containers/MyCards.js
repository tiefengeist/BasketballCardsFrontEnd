import React from 'react'
import Card from '../components/Card'

class MyCards extends React.Component {
  render() {
    return (
      <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row my-card-row">{this.props.myCards.map((card, id) => {
            return <Card card={card} key={id}/>
          })}</div>
      </div>
    </div>
    )

  }
}

export default MyCards
