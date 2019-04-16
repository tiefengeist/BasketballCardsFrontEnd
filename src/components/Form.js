import React from "react";

class Form extends React.Component {
  render() {
    return (
    <div>
    <h4>Search For Your Player</h4>
    <form onSubmit={ev => this.props.getFilteredData(ev)}>
      <input type="text" name="firstName" placeholder="Player Name"></input>
      <input type="submit" value="submit"></input>
    </form>
    </div>
  )
  }
}

// <input type="text" name="lastName" placeholder="Last Name"></input>
// <select name="teamName">
//   <option value="Atlanta Hawks">Atlanta Hawks</option>
//   <option value="Boston Celtics">Boston Celtics</option>
//   <option value="Brookln Nets">Brookln Nets</option>
//   <option value="Charlotte Hornets">Charlotte Hornets</option>
//   <option value="Chicago Bulls">Chicago Bulls</option>
//   <option value="Cleveland Cavaliers">Cleveland Cavaliers</option>
//   <option value="Dallas Mavericks">Dallas Mavericks</option>
//   <option value="Denver Nuggets">Denver Nuggets</option>
//   <option value="Detroit Pistons">Detroit Pistons</option>
//   <option value="Golden State Warriors">Golden State Warriors</option>
//   <option value="Houston Rockets">Houston Rockets</option>
//   <option value="Indiana Pacers">Indiana Pacers</option>
//   <option value="Los Angeles Clippers">Los Angeles Clippers</option>
//   <option value="Los Angeles Lakers">Los Angeles Lakers</option>
//   <option value="Memphis Grizzlies">Memphis Grizzlies</option>
//   <option value="Miami Heat">Miami Heat</option>
//   <option value="Milwaukee Bucks">Milwaukee Bucks</option>
//   <option value="Minnesota Timberwolves">Minnesota Timberwolves</option>
//   <option value="New Orleans Pelicans">New Orleans Pelicans</option>
//   <option value="New York Knicks">New York Knicks</option>
//   <option value="Oklahoma City Thunder">Oklahoma City Thunder</option>
//   <option value="Orlando Magic">Orlando Magic</option>
//   <option value="Philadelphia 76ers">Philadelphia 76ers</option>
//   <option value="Phoenix Suns">Phoenix Suns</option>
//   <option value="Portland Trail Blazers">Portland Trail Blazers</option>
//   <option value="Sacramento Kings">Sacramento Kings</option>
//   <option value="San Antonio Spurs">San Antonio Spurs</option>
//   <option value="Toronto Raptors">Toronto Raptors</option>
//   <option value="Utah Jazz">Utah Jazz</option>
//   <option value="Washington Wizards">Washington Wizards</option>
// </select>


export default Form;
