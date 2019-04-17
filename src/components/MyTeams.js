import React, { Component } from 'react';
import MyCards from '../containers/MyCards'


class MyTeams extends Component {
  constructor(props) {
    super(props)

    this.state = {
    teams: [],
    selectedTeam: []}
  }
  componentDidMount() {
    if (this.props.user_id){
    this.getMyTeams()}
  }

  getMyTeams = () => {
    return fetchRequest(`http://localhost:3000/api/v1/teams/${this.props.user_id}`, 'get')
    .then(res => res.json())
    .then(json => this.setState({
      teams: json
    }))
  }


  render() {
    return (
      <h1>{this.state.teams.map(team => team.team_name)}</h1>
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
