import { useState } from "react";
import "./FeedReader.css"
import RSSInfoSection from "./RSSInfoSection"
import React from "react";

interface RSSInfo {
  title : string;
  pubDate: string;
  summary: string;
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

function readRSS( url : string ) : RSSInfo{
  return {
    title: 'Hello RSS',
    pubDate: 'asdf',
    summary: 'This is the sample',
    episodes: [ 
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
            let rssData = readRSS('google.com')
            setRssInfoComponent( (prevComponents) => [...prevComponents, <RSSInfoSection title={rssData.title} description={rssData.summary} pubDate={rssData.pubDate}/> ])
            console.log('asdfasdf')
          }}

          onChange={(e)=>{
            setInputUrl(e.target.value)
          }}

          onKeyDown={(e)=>{
            if( e.key == 'Enter'){
              let rssData = readRSS('google.com')
              setRssInfoComponent( (prevComponents) => [ <RSSInfoSection title={rssData.title} description={rssData.summary} pubDate={rssData.pubDate}/> ])
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