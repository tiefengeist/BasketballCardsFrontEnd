import React from 'react'


const VersusTeamCard = props => {
  // const {team, onPlay} = props;
  // let imageUrl = "/" + props.team.team_name.replace(/\s+/g, '').toLowerCase() + ".png";
  return (
    <div>


      <div className="ui segment inverted grey my-cards">
        <div className="ui container">
        <div className="ui header">{props.team.team_name}</div>
          <div className="ui two row grid">
            <div className="ui row">
              <div className="ui five column grid">
                <div className="ui column">
                        <div className="ui card">
                            <div className="content">
                              <div className="header">
                              {props.team.player1_first_name} {props.team.player1_last_name}
                              </div>
                              <div className="ui slide masked reveal image">
                              {props.team.player1_img !== null ? <img className="visible content" src={props.team.player1_img} alt=""/> : <img className="visible content" src="http://blog.logomyway.com/wp-content/uploads/2017/01/nba-logo-design.jpg" alt=""/>}
                              <img className="hidden content" id="lodos" src={"/" + props.team.player1_team_name.replace(/\s+/g, '').toLowerCase() + ".png"} alt=""/>
                              </div>
                              <div className="meta text-wrap">
                              <strong>{props.team.player1_team_name}</strong>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="ui column">
                        <div className="ui card">
                            <div className="content">
                              <div className="header">
                              {props.team.player2_first_name} {props.team.player2_last_name}
                              </div>
                              <div className="ui slide masked reveal image">
                              {props.team.player2_img !== null ? <img className="visible content" src={props.team.player2_img} alt=""/> : <img className="visible content" src="http://blog.logomyway.com/wp-content/uploads/2017/01/nba-logo-design.jpg" alt=""/>}
                              <img className="hidden content" id="lodos" src={"/" + props.team.player2_team_name.replace(/\s+/g, '').toLowerCase() + ".png"} alt=""/>
                              </div>
                              <div className="meta text-wrap">
                              <strong>{props.team.player2_team_name}</strong>
                              </div>
                            </div>
                          </div>
                          </div>
                          <div className="ui column">
                          <div className="ui card">
                              <div className="content">
                                <div className="header">
                                {props.team.player3_first_name} {props.team.player3_last_name}
                                </div>
                                <div className="ui slide masked reveal image">
                                {props.team.player3_img !== null ? <img className="visible content" src={props.team.player3_img} alt=""/> : <img className="visible content" src="http://blog.logomyway.com/wp-content/uploads/2017/01/nba-logo-design.jpg" alt=""/>}
                                <img className="hidden content" id="lodos" src={"/" + props.team.player3_team_name.replace(/\s+/g, '').toLowerCase() + ".png"} alt=""/>
                                </div>
                                <div className="meta text-wrap">
                                <strong>{props.team.player3_team_name}</strong>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="ui column">
                          <div className="ui card">
                              <div className="content">
                                <div className="header">
                                {props.team.player4_first_name} {props.team.player4_last_name}
                                </div>
                                <div className="ui slide masked reveal image">
                                {props.team.player4_img !== null ? <img className="visible content" src={props.team.player4_img} alt=""/> : <img className="visible content" src="http://blog.logomyway.com/wp-content/uploads/2017/01/nba-logo-design.jpg" alt=""/>}
                                <img className="hidden content" id="lodos" src={"/" + props.team.player4_team_name.replace(/\s+/g, '').toLowerCase() + ".png"} alt=""/>
                                </div>
                                <div className="meta text-wrap">
                                <strong>{props.team.player4_team_name}</strong>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="ui column">
                          <div className="ui card">
                              <div className="content">
                                <div className="header">
                                {props.team.player5_first_name} {props.team.player5_last_name}
                                </div>
                                <div className="ui slide masked reveal image">
                                {props.team.player5_img !== null ? <img className="visible content" src={props.team.player5_img} alt=""/> : <img className="visible content" src="http://blog.logomyway.com/wp-content/uploads/2017/01/nba-logo-design.jpg" alt=""/>}
                                <img className="hidden content" id="lodos" src={"/" + props.team.player5_team_name.replace(/\s+/g, '').toLowerCase() + ".png"} alt=""/>
                                </div>
                                <div className="meta text-wrap">
                                <strong>{props.team.player5_team_name}</strong>
                                </div>
                              </div>
                            </div>
                          </div>
              </div>
            </div>
          </div>
          <div className="ui row">
          <button className="ui button" value={props.team.team_name} onClick={ev => props.onPlay(ev)}>Start Game!</button>
          </div>
        </div>
      </div>
    </div>
  )

}

export default VersusTeamCard
