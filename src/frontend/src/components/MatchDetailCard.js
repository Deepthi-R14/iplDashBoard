import React from 'react';
import { Link } from 'react-router-dom';
import './MatchDetailCard.scss';

export default function MatchDetailCard({teamName , match}) {
  if(!match) return null;
  const otherTeam = match.team1 === teamName? match.team2 : match.team1; 
  const otherTeamRoute = `/team/${otherTeam}`
  const matchWon = teamName === match.winner;

  return (
    <div className={matchWon ? 'MatchDetailCard won' : 'MatchDetailCard lost'}>
      <div>
        <h2 className='otherteam'> <span>vs</span> <Link to={otherTeamRoute}>
          {otherTeam}
          </Link> </h2>
        <h3 className='matchdate'>{match.date} </h3>
        <h3 className='matchvenue'>at {match.venue} </h3>
        <h3 className='matchwinner'>{match.winner} won by {match.resultMargin} {match.result}</h3>
        </div>
        <div className='innings-detail'>
        <h3>First Innings</h3>
        <p>{match.team1}</p>
        <h3>Second Innings</h3>
        <p>{match.team2}</p>
        <h3>Man of the Match</h3>
        <p>{match.playerOfMatch}</p>
        </div>
    </div>
  )
}
