import React from 'react'
import Card from '../components/Card'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
// import Fade from 'react-reveal/Fade'

class MyCards extends React.Component {
  render() {
    return (
    <div>
      <header> My Squad <Link to='./Teams'><button>View My Teams</button></Link></header>
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
        <div className="center aligned row" id="teamSubmit" >
          <form id="teamForm"  onSubmit={ev => this.props.saveTeamObject(ev)}>
            <label>Name Your Squad
              <input type="text" name="teamName"/>
              </label>
              <input type="submit" className="addTeamButton" value="Submit"/>
          </form>

          </div>
        </div>
        </div>
      </div>
    </div>
    )

  }
}

export default MyCards
