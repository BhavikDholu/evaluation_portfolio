import React from 'react';
import Project from '../components/Project';

function Page({repo}) {
   const {items} = repo

  return (
    <div style={{textAlign:"center"}}>
        <h1>Projects</h1>
      {
        items?.map((e)=>(<Project key={e.name} name={e.name} language={e.language}forks_count={e.forks_count} stargazers_count={e.stargazers_count} clone_url={e.clone_url}/>))
      }
    </div>
  )
}


export async function getStaticProps(context) {
    let res = await fetch("https://api.github.com/search/repositories?q=user:BhavikDholu+fork:true&sort=updated&per_page=10&type=Repositories");
    let data = await res.json();
    // console.log(data)
    return {
      props: {
        repo : data
      }, // will be passed to the page component as props
    }
  }

export default Page;