
/*
  This component is meant to be the landing page for the app
  This is where we will pull the user's rss list from the api
  We will also display any feeds such as the newest episodes...maybe
*/

import { useState, useEffect } from "react"
import './Home.css'
import PodcastDropDown from "./PodcastDropDown.tsx"
import RSSInfoSection from "../feedReader/RSSInfoSection.tsx"
import { readRSS } from "../feedReader/FeedReader.tsx"

async function fetchAPI( url? : string) : Promise<JSX.Element[]> {
  const req = await fetch(url ?? 'http://localhost:3000/api')
  const res = await req.json()
  
  console.log(res)

  const pods : JSX.Element[] = []
  res.map( (pod : {name: string; link: string} )=>{
    // readRSS(pod.link).then(data =>{
    //   pods.push(PodcastDropDown(data))
    //   console.log(data)
    // })
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
  <div className="home-display">
    <h2>Podcasts</h2>
    {/* <PodcastScrollableList podcasts={pods} /> */}
    {pods}
    <h2>New Episodes</h2>
  </div>
    
  </>
}

export default Home