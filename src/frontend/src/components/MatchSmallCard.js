import React from 'react';
import { Link } from 'react-router-dom';

export default function MatchSmallCard({teamName , match}) {


  if(!match) return null;
  const otherTeam = match.team1 === teamName? match.team2 : match.team1; 
  const otherTeamRoute = `/team/${otherTeam}`
  return (
    <div className='MatchSmallCard'>
        <h3>vs 
          <Link to={otherTeamRoute}>
          {otherTeam}
          </Link></h3>
        <p>{match.winner} won by {match.resultMargin} {match.result}</p>
    </div>
  )
}
