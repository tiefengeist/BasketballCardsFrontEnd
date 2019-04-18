import React from 'react'
import Card from '../components/Card'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
// import Fade from 'react-reveal/Fade'



class MyCards extends React.Component {
  render() {
    return (

    <div>
      <div className="ui button" onClick={ev => this.props.logMeOut(ev)}>Log Out</div>
       <Link to='./Teams'><button className="ui button">View My Teams</button></Link>
      <div className="ui segment inverted grey my-cards">
        <div className="ui container">
          <div className="ui header"> My Squad</div>
          <div className="ui two row grid">
            <div className="row">
              <div className="ui container">
          <div className="ui five column grid">
            {this.props.myCards.map((card, id) => {
              return <Card card={card} key={id} addCardToMyCards={this.props.removeCard}/>
            })}
          </div>
        </div>
        </div>
                        <div className="ui row" id="teamSubmit" >
                          <form className="ui form" id="teamForm"  onSubmit={ev => this.props.saveTeamObject(ev)}>
                            <label className="ui label">Name Your Squad
                              <input type="text" name="teamName"/>
                              <input type="submit" className="addTeamButton" value="Submit"/>
                              </label>

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
