import React from "react";
import { Link } from "react-router-dom";

export const YearSelection = ({teamName}) => {
  let years = [];
  const start_year = process.env.REACT_APP_START_YEAR;
  const end_year = process.env.REACT_APP_END_YEAR;

  for (let i = start_year; i <= end_year; i++) {
    years.push(i);
  }
  return (

years.map(year => <h3  key={year}>
   <Link to={`/team/${teamName}/matches/${year}`}>{year}</Link> 
    </h3> )

  ) ;
};
