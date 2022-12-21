import { React } from "react";
import { Link } from "react-router-dom";

import "./TeamTile.scss";
export const TeamTile = ({ teamName }) => {
  return (
    <Link to={`/team/${teamName}`}>
      <li className="team-card">
        <p className="team-card-name">{teamName}</p>
      </li>
    </Link>
  );
};
