import {React,useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import MatchDetailCard from '../components/MatchDetailCard'
import MatchSmallCard from '../components/MatchSmallCard'
import { YearSelection } from '../components/YearSelection'
import './MatchPage.scss'

export default function MatchPage() {

const [matches,setMatches] = useState([]);
const{teamName , year} = useParams();


useEffect(
  ()=>{
      const fetchMatches = async()=>{
          const response = await fetch(`http://localhost:8080/team/${teamName}/matches?year=${year}`);
          const data = await response.json();
          setMatches(data)
      }
      fetchMatches();
  },[teamName, year] //when rhe elements in this array chnaged that is when this component is loaded
  );
  

  return (
    <div className='MatchPage'>
      <div className='Years-Component'>
          <h1>YEARS</h1>
          <YearSelection teamName = {teamName}/>
        </div>  
      <div>
        <h1>Match Page</h1>
        <h1>{teamName} in the year {year}</h1>
        {
          matches.map(match=> <MatchDetailCard teamName={teamName} match={match}/>)
        }
        </div>
        
    </div>
  )
}
