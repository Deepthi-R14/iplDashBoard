import React from "react";
import { Link } from "react-router-dom";
import './MatchSmallCard.scss'

export default function MatchSmallCard({ teamName, match }) {
  if (!match) return null;
  const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
  const otherTeamRoute = `/team/${otherTeam}`;
  const matchWon = teamName === match.winner;

  return (
    <div className={matchWon ? 'MatchSmallCard won' : 'MatchSmallCard lost'}>
      <h3>
       <span>vs  </span> 
        <Link to={otherTeamRoute}>{otherTeam}</Link>
      </h3>
      <p>
        {match.winner} won by {match.resultMargin} {match.result}
      </p>
    </div>
  );
}
