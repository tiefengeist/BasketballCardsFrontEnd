import React, { Component, Fragment } from 'react';
import MyCards from '../containers/MyCards'
import TeamCard from '../components/TeamCard'
import VersusTeamCard from '../components/VersusTeamCard'
import SoloTeamCard from '../components/SoloTeamCard'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';



class MyTeams extends Component {
  constructor(props) {
    super(props)

    this.state = {
    teams: [],
    historicTeams: [
      {
    team_name: '1985 Celtics',
    player1_first_name: 'Larry',
    player1_last_name: 'Bird',
    player1_team_name:'Boston Celtics',
    player1_img: 'http://a.espncdn.com/i/magazine/new/larry_bird_a.jpg',
    player1_id: 2851,
    player2_first_name: 'Kevin',
    player2_last_name: 'McHale',
    player2_team_name:'Boston Celtics',
    player2_img: 'https://i.pinimg.com/originals/d0/ed/cf/d0edcf371b216bd7d2599649209b9b02.jpg',
    player2_id: 2854,
    player3_first_name: 'Dennis',
    player3_last_name: 'Johnson',
    player3_team_name:'Boston Celtics',
    player3_img: 'https://i.pinimg.com/originals/e2/ac/f8/e2acf85d111314bf43373aa37550dd28.jpg',
    player3_id: 2429,
    player4_first_name: 'Robert',
    player4_last_name: 'Parish',
    player4_team_name:'Boston Celtics',
    player4_img: 'http://1.bp.blogspot.com/-dunYWIiVP6c/T1oIwXPDbpI/AAAAAAAAFrw/_HjowpOYtLk/s1600/72340843_display_image.jpg',
    player4_id: 2859,
    player5_first_name: 'Danny',
    player5_last_name: 'Ainge',
    player5_team_name: 'Boston Celtics',
    player5_img: 'http://www.rantsports.com/clubhouse/files/2015/06/Danny-Ainge.jpg',
    player5_id: 502
  },
 {
    team_name: '1995 Bulls',
    player1_first_name: 'Michael',
    player1_last_name: 'Jordan',
    player1_team_name:'Chicago Bulls',
    player1_img: 'https://statics.sportskeeda.com/editor/2018/03/a4a7b-1520474015-800.jpg',
    player1_id: 2931,
    player2_first_name: 'Ron',
    player2_last_name: 'Harper',
    player2_team_name:'Chicago Bulls',
    player2_img: 'https://www.straitstimes.com/sites/default/files/styles/article_pictrure_780x520_/public/articles/2016/09/05/ronharper_1_0.jpg?itok=Zryhk2ep&timestamp=1473052156',
    player2_id: 3070,
    player3_first_name: 'Scottie',
    player3_last_name: 'Pippen',
    player3_team_name:'Chicago Bulls',
    player3_img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Lipofsky_Pippen.jpg/275px-Lipofsky_Pippen.jpg',
    player3_id: 2933,
    player4_first_name: 'Dennis',
    player4_last_name: 'Rodman',
    player4_team_name:'Chicago Bulls',
    player4_img: 'https://media.brstatic.com/2017/05/15092311/dennis-rodman-networth.jpg',
    player4_id: 552,
    player5_first_name: 'Luc',
    player5_last_name: 'Longley',
    player5_team_name: 'Chicago Bulls',
    player5_img: 'http://exnba.com/wp-content/uploads/2015/09/longley-vs-kemp-300x225.jpeg',
    player5_id: 706
  },
 {
    team_name: '2016 Warriors',
    player1_first_name: 'Kevin',
    player1_last_name: 'Durant',
    player1_team_name:'Golden State Warriors',
    player1_img: 'http://nba-players.herokuapp.com/players/durant/kevin',
    player1_id: 140,
    player2_first_name: 'Stephen',
    player2_last_name: 'Curry',
    player2_team_name:'Golden State Warriors',
    player2_img: 'http://nba-players.herokuapp.com/players/curry/stephen',
    player2_id: 115,
    player3_first_name: 'Klay',
    player3_last_name: 'Thompson',
    player3_team_name:'Golden State Warriors',
    player3_img: 'http://nba-players.herokuapp.com/players/thompson/klay',
    player3_id: 443,
    player4_first_name: 'Andrew',
    player4_last_name: 'Bogut',
    player4_team_name:'Golden State Warriors',
    player4_img: 'http://nba-players.herokuapp.com/players/bogut/andrew',
    player4_id: 1593,
    player5_first_name: 'Draymond',
    player5_last_name: 'Green',
    player5_team_name: 'Golden State Warriors',
    player5_img: 'http://nba-players.herokuapp.com/players/green/draymond',
    player5_id: 185
  }
    ],
    versus: false,
    selectedTeam: [],
    versusTeam: [],
    toggle: false,
    totalPoints: 0,
    versusPoints: 0
  }
  }
  componentDidMount() {
    if (this.props.user_id){
    this.getMyTeams()}
  }
  // componentDidUpdate() {
  //   if (this.state.teams) {
  //   this.makePlayerObjects()}
  // }

  deleteTeam = (ev) => {

    let teamIdValue = ev.target.value
    function findDeletedTeam(team) {
      return team.id == teamIdValue
    }
    let teamToDelete = this.state.teams.find(findDeletedTeam)
    let deletionIndex = this.state.teams.indexOf(teamToDelete)
    let newArr = this.state.teams.splice(deletionIndex, 1)
    this.setState({teams: this.state.teams})

    // let data = {
    //   team_name: teamNameValue
    // }
    fetchRequest(`http://localhost:3000/api/v1/teams/${teamIdValue}`, 'delete')
  }

  getMyTeams = () => {
    return fetchRequest(`http://localhost:3000/api/v1/teams/${this.props.user_id}`, 'get')
    .then(res => res.json())
    .then(json => this.setState({
      teams: json
    }))
  }

  getPlayerPoints(number) {
    let variable = `player${number}_id`
    let randnum = Math.floor(Math.random()*10)
    if (this.state.toggle === true) {
    return fetch(`https://www.balldontlie.io/api/v1/stats?player_ids[]=${this.state.selectedTeam[variable]}&per_page=20`)
    .then(res => res.json())
    .then(json => this.setState({
      totalPoints: this.state.totalPoints += json['data'][randnum].pts
    }))
  }
    else {return null}
  }

  getVersusPoints(number) {
    let variable = `player${number}_id`
    let szn = this.state.versusTeam.team_name.slice(0,4)
    let randnum = Math.floor(Math.random()*10)
    if (this.state.toggle === true) {
    return fetch(`https://www.balldontlie.io/api/v1/stats?player_ids[]=${this.state.versusTeam[variable]}&seasons[]=${szn}&per_page=20`)
    .then(res => res.json())
    .then(json => this.setState({
      versusPoints: this.state.versusPoints += json['data'][randnum].pts
    }))
  }
    else {return null}
  }

  onPlay = (ev) => {
    function isThisTeam(team) {
      return team.team_name === ev.target.value
    }
    let thisTeam = this.state.teams.find(isThisTeam)

    this.setState({selectedTeam: thisTeam})
    this.setState({toggle: true})

  }

  onVersus = (ev) => {
    function isThisTeam(team) {
      return team.team_name === ev.target.value
    }
    let thisTeam = this.state.historicTeams.find(isThisTeam)
    this.setState({versus: true})
    this.setState({versusTeam: thisTeam})
  }

  goBack = (ev) => {
    this.setState({toggle: false})
  }

  displayScore = () => {
    this.state.totalPoints > this.state.versusPoints ? alert(`${this.state.selectedTeam.team_name} : ${this.state.totalPoints} - ${this.state.versusTeam.team_name}: ${this.state.versusPoints} \n You win!`) : alert(`${this.state.versusTeam.team_name}: ${this.state.versusPoints} - ${this.state.selectedTeam.team_name} : ${this.state.totalPoints} \n You lost...`)
  }

   playGame = (ev) => {
    Promise.all([
      this.getPlayerPoints(1),
      this.getPlayerPoints(2),
      this.getPlayerPoints(3),
      this.getPlayerPoints(4),
      this.getPlayerPoints(5),

      this.getVersusPoints(1),
      this.getVersusPoints(2),
      this.getVersusPoints(3),
      this.getVersusPoints(4),
      this.getVersusPoints(5)]
    ).then(() => this.displayScore())
    .then(() => this.setState({totalPoints: 0, versusPoints: 0}))

  }




  render() {
    return (
      <Fragment><div className="teamLister"><Link exact to='./'><button className="ui button">Return to Search</button></Link>

      {this.state.toggle ?

          !this.state.versus ?  <div> <SoloTeamCard goBack={this.goBack} team={this.state.selectedTeam} onVersus={this.onVersus} /> </div> : <div>  <VersusTeamCard goBack={this.goBack} onPlay={this.playGame} team={this.state.selectedTeam} onVersus={this.onVersus} /> <VersusTeamCard goBack={this.goBack} onPlay={this.playGame} team={this.state.versusTeam} onVersus={this.onVersus} /> </div>
        :

        this.state.teams.map((team, id) => {
        return <TeamCard deleteTeam={this.deleteTeam} onPlay={this.onPlay} team={team} key={id}/>
      })

    }
      </div></Fragment>
    );
  }
}

export default MyTeams;

function fetchRequest(URL, method, data={}) {
  const initial = {headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
    },
    method: method,
    body: JSON.stringify(data)
  }
                if (method.toLowerCase() === 'get') delete initial.body;
                  else if (method.toLowerCase() === 'post' && initial.body.id) delete initial.body.id;
                return fetch(URL, initial);
}
// return team.keys().map((player) => {
//   return <TeamCard card={player} />
// })
// {this.state.teams.map(team => {
//     Object.keys(team).forEach(function (player) {console.log(player + ':'); console.log(team[player])})
// })}
