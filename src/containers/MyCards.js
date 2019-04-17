import React from 'react'
import Card from '../components/Card'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
// import Fade from 'react-reveal/Fade'

class MyCards extends React.Component {
  render() {
    return (
    <div>
      <header> My Squad </header>
      <div className="ui segment inverted blue my-cards">
        <div className="ui container">
          <div className="ui two row grid">
            <div className="row">
          <div className="ui five column grid">
            {this.props.myCards.map((card, id) => {
              return <Card card={card} key={id} addCardToMyCards={this.props.removeCard}/>
            })}
          </div>
        </div>
        <div className="row" id="teamSubmit" >
          <form id="teamForm">
            <label>Name Your Squad
              <input type="text" name="teamName" />
              </label>
          </form>
          <Link to='./Teams'><button className="addTeamButton" onClick={this.props.saveTeamObject}>Save Team</button></Link>
          </div>
        </div>
        </div>
      </div>
    </div>
    )

  }
}

export default MyCards
