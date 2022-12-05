import React from "react";
import {useRouter} from "next/router";

export default function Project(props){
    const router = useRouter();
    const {name,language,forks_count,stargazers_count,clone_url} = props;
    
    const handleClick=()=>{
      router.push(clone_url);
    }

    return (
        <div onClick={handleClick} style={{border:"1px solid teal",marginTop:"20px",width:"40%"}}>
           <h3>project: {name}</h3>
           <p>{language}</p>
           <p>fork :{forks_count}</p>
           <p>star :{stargazers_count}</p>
        </div>
    )
}
