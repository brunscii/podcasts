import { useState } from "react";
import "./FeedReader.css"
import RSSInfoSection from "./RSSInfoSection"
import React from "react";

interface RSSInfo {
  title : string;
  pubDate: string;
  summary: string;
  imageUrl: string;
  episodes: {
    title : string;
    description: string;
    pubDate: string;
    duration: string;
    imageLink: string;
  }[]
}

function isValidRss( url : string ){
  /*Checks to see if the given url contains a valid RSS feed */

}

async function readRSS( url : string ) : Promise<RSSInfo>{

  const rssRes = await fetch(url)
  const rssXML = await rssRes.text()

  const parser = new DOMParser()
  const rssData = parser.parseFromString(rssXML, 'text/xml')

  

  console.log(rssData)

  return {
    title: rssData.querySelector('title')?.textContent || 'No Title Data',
    pubDate: rssData.querySelector('pubDate')?.textContent || 'N/A',
    summary: rssData.querySelector('summary')?.textContent || '',
    imageUrl: rssData.querySelector('image>url')?.textContent || '',
    episodes: 
    [ 
      {
        title: 'Inner element',
        description: 'asdfasdf',
        pubDate: '',
        duration: '',
        imageLink: ''
      }
    ]
  }

}

function FeedReader() {

  const [inputUrl, setInputUrl] = useState('');
  const [rssInfoComponent, setRssInfoComponent] = useState<JSX.Element[]>([]);

  return (
    <>
    <div className='rss-input-box' >
      <div className="rss-input">
        <label htmlFor="rss-input">Enter a RSS URL</label>
        <input title="rss-input" type="url" name="rss-input" id="rss-input" placeholder="rss.website.com" value={inputUrl} 
          onSubmit={ (e)=>{
            e.preventDefault();

            // test if a valid rss or not
            // Read in RSS from inputUrl's address
            readRSS(inputUrl).then( (rssData) => {
              setRssInfoComponent( (prevComponents) => [...prevComponents, <RSSInfoSection title={rssData.title} description={rssData.summary} pubDate={rssData.pubDate} imageUrl={rssData.imageUrl} /> ])
            })
            console.log('asdfasdf')
          }}

          onChange={(e)=>{
            setInputUrl(e.target.value)
          }}

          onKeyDown={(e)=>{
            if( e.key == 'Enter'){
              let rssData = readRSS(inputUrl)
              readRSS(inputUrl).then( (rssData) => {
                setRssInfoComponent( (prevComponents) => [ <RSSInfoSection title={rssData.title} description={rssData.summary} pubDate={rssData.pubDate} imageUrl={rssData.imageUrl} /> ])
              })
              console.log('asdfasdf')
            }
          }}
        />
      </div>
      <div className="rss-content">
        {rssInfoComponent}
      </div>
    </div>
    </>
  )
}
export default FeedReader