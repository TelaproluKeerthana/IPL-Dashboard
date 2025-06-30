import {React, useEffect, useState} from 'react'; 
import { MatchDetailCard } from '../components/MatchDetailCard';
import { MatchSmallCard } from '../components/MatchSmallCard';
import { useParams } from 'react-router-dom';
export const MatchPage = () => {
    
    const [team, setTeam] = useState({matches: []});
    const {teamName} = useParams();

  return (
    <div className="TeamPage">
     <h1>Match Page</h1>
    </div>
  );
}
