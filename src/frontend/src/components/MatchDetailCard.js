import React from 'react';
import { Link } from 'react-router-dom';

export default function MatchDetailCard({teamName , match}) {
  if(!match) return null;
  const otherTeam = match.team1 === teamName? match.team2 : match.team1; 
  const otherTeamRoute = `/team/${otherTeam}`

  return (
    <div className='MatchDetailCard'>
        <h3>Latest Match</h3>
        <h2> <Link to={otherTeamRoute}>
          {otherTeam}
          </Link> </h2>
        <h4>{match.date} </h4>
        <h4>at {match.venue} </h4>
        <h4>{match.winner} won by {match.resultMargin} {match.result}</h4>
    </div>
  )
}
