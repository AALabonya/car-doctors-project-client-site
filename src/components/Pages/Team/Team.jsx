import { useEffect, useState } from "react";
import TeamMember from "./TeamMember";

const Team = () => {
    const [teams, setTeams] = useState([])

    useEffect(()=>{
        fetch("/team.json")
        .then(res=>res.json())
        .then(data=>setTeams(data))
    },[])
    return (
      
            <div className="mt-10">
            <div className="space-y-4">
          <h4 className="text-[#FF3811] text-center font-bold">Team</h4>
             <h1 className="text-3xl font-bold text-center">Meet Our Team</h1>
             <p className="text-center">The majority have suffered alteration in some form, by injected humour, or randomized <br/> 
             words which do not look even slightly believable. </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {
                teams.map(team=><TeamMember key={team.id} team={team}></TeamMember>)
              }
          </div>
        </div>
      
    );
};

export default Team;