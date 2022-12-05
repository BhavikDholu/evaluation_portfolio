import React from "react";
import Link from "next/link";

export default function Navbar(){
   

    return (
        <div style={{backgroundColor:"black",padding:"20px",display:"flex",justifyContent:"space-around",color:"white"}}>
           <Link href="/">Bhavik Dholu</Link>
           <div style={{display:"flex",justifyContent:"space-between",gap:"30px"}}>
            <Link href="/projects">Projects</Link>
            <Link href="/education">Education</Link>
           </div>
        </div>
    )
}