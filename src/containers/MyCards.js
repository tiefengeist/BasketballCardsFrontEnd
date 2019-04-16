import React from 'react'
import Card from '../components/Card'

class MyCards extends React.Component {
  render() {
    return (
    <div>
      <header> My Squad </header>
      <div className="ui segment inverted blue my-cards">
        <div className="ui container">
          <div className="ui five column grid">
            {this.props.myCards.map((card, id) => {
              return <Card card={card} key={id} addCardToMyCards={this.props.removeCard}/>
            })}
          </div>
        </div>
      </div>
    </div>
    )

  }
}

export default MyCards
