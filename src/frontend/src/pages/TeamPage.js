import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MatchDetailCard from "../components/MatchDetailCard";
import MatchSmallCard from "../components/MatchSmallCard";
import { Link } from "react-router-dom";
import { PieChart } from "react-minimal-pie-chart";

import "./TeamPage.scss";

export default function TeamPage() {
  const [team, setTeam] = useState({ matches: [] });
  const { teamName } = useParams();

  useEffect(
    () => {
      const fetchMatches = async () => {
        const response = await fetch(`http://localhost:8080/team/${teamName}`);
        const data = await response.json();
        setTeam(data);
      };
      fetchMatches();
    },
    [teamName] //when rhe elements in this array chnaged that is when this component is loaded
  );

  if (!team || !team.teamName) {
    return <h1>Team not found</h1>;
  }

  return (
    <div className="TeamPage">
      <div className="teamname">
        <h1>{team.teamName}</h1>
      </div>
      <div className="winn-loss">
        <h3>Wins / Loss</h3>
        <PieChart
          className="PieChart"
          data={[
            { title: "Wins", value: team.totalWins, color: "rgb(0, 255, 76)" },
            {
              title: "Loss",
              value: team.totalMatches - team.totalWins,
              color: "rgb(255, 67, 67)",
            },
          ]}
        />
      </div>
      <div className="matchdetail">
        <h3>Latest Matches </h3>
        <MatchDetailCard teamName={team.teamName} match={team.matches[0]} />
      </div>

      {team.matches.slice(1).map((match) => (
        <MatchSmallCard teamName={team.teamName} match={match} />
      ))}
      <div className="more-link">
        <Link
          to={`/team/${teamName}/matches/${process.env.REACT_APP_END_YEAR}`}
        >
          More {">"}
        </Link>
      </div>
    </div>
  );
}
