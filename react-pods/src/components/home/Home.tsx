
/*
  This component is meant to be the landing page for the app
  This is where we will pull the user's rss list from the api
  We will also display any feeds such as the newest episodes...maybe
*/

import { useState, useEffect } from "react"
import './Home.css'
import PodcastScrollableList from "./PodcastScrollableList.tsx"

async function fetchAPI( url? : string) : Promise<JSX.Element[]> {
  const req = await fetch(url ?? 'http://localhost:3000/api')
  const res = await req.json()
  
  console.log(res)

  const pods : JSX.Element[] = []
  res.map( (pod : {name: string; link: string} )=>{
    pods.push(
    <div className="podcast-list-item">
      <span>{pod.name}</span> <a href={pod.link}>{pod.link}</a>
    </div>)
  }) 

  return pods
}

function Home(){
  
  const [pods, setPods] = useState<JSX.Element[]>([])
  useEffect( ()=>{
    fetchAPI().then( data => setPods(data))
    
  },[] )
  // Not this -- create a jsx element state so that PodcastScrollableList updates on load
  // fetchAPI().then( pods => setPods(pods) )
  console.log(pods)
  return <>
  <div className="home-screen">
    <h2>Podcasts</h2>
    {/* <PodcastScrollableList podcasts={pods} /> */}
    {pods}
    <h2>New Episodes</h2>
  </div>
    
  </>
}

export default Home