import { useState } from "react";
import "./FeedReader.css"
import RSSInfoSection from "./RSSInfoSection.tsx"
import {EpisodeListItemProps} from "./EpisodeListItem.tsx";

interface RSSInfo {
  title : string;
  pubDate: string;
  summary: string;
  imageUrl: string;
  episodes: EpisodeListItemProps[]
}

function isValidRss( url : string ){
  /*Checks to see if the given url contains a valid RSS feed */

}

async function readRSS( url : string ) : Promise<RSSInfo>{

  const rssRes = await fetch(url)
  const rssXML = await rssRes.text()

  const parser = new DOMParser()
  const rssData = parser.parseFromString(rssXML, 'application/xhtml+xml')
  const eps = rssData.querySelectorAll('channel>item')

  const episodes : EpisodeListItemProps[] = []
  eps.forEach( e => {
    //  console.log(e.querySelector('subtitle')?.textContent)
    // let desc= e.querySelector('subtitle')?.textContent ?? e.querySelector('summary')?.textContent ?? 'No Summary'
    // console.log(e.querySelector('image')?.getAttribute('href'))

    episodes.push({
      title : e.querySelector('title')?.textContent || '',
      desription: e.querySelector('subtitle')?.textContent || parser.parseFromString(e.querySelector('summary')?.textContent || "", 'text/html').querySelector('p')?.textContent || '',
      url: e.querySelector('enclosure')?.textContent || '',
      pubDate: e.querySelector('pubDate')?.textContent || '',
      duration: e.querySelector('duration')?.textContent || '',
      image: e.querySelector('image')?.getAttribute('href') || rssData.querySelector('channel>image>url')?.textContent || ''


    })
    // console.log(e)
  })

  

  // console.log(rssData)

  return {
    title: rssData.querySelector('channel>title')?.textContent || 'No Title Data',
    pubDate: rssData.querySelector('channel>pubDate')?.textContent ?? rssData.querySelector('lastBuildDate')?.textContent ?? 'N/A',
    summary: rssData.querySelector('channel>summary')?.textContent || '',
    imageUrl: rssData.querySelector('channel>image>url')?.textContent || '',


    episodes: episodes
    
  }

}

function FeedReader() {

  const rssPlaceHolder = "https://feed.syntax.fm/rss"

  const [inputUrl, setInputUrl] = useState('');
  const [rssInfoComponent, setRssInfoComponent] = useState<JSX.Element[]>([]);
  const [rssEpisodes, setRssEpisodes] = useState<JSX.Element[]>([]);

  return (
    <>
    <div className='rss-input-box' >
      <div className="rss-input">
        <label htmlFor="rss-input">Enter a RSS URL</label>
        <input title="rss-input" type="url" name="rss-input" id="rss-input" placeholder={rssPlaceHolder} value={inputUrl} 

          onFocus={(e)=>{
            setInputUrl(e.target.value? e.target.value : rssPlaceHolder)
          }}
          onChange={(e)=>{
            setInputUrl(e.target.value)
          }}

          onKeyDown={(e)=>{
            if( e.key == 'Enter'){
              let rssData = readRSS(inputUrl)              
              document.querySelector('.rss-input-box')?.classList.add('topped')
              readRSS(inputUrl).then( (rssData) => {
                setRssInfoComponent( (prevComponents) => [ <RSSInfoSection title={rssData.title} description={rssData.summary} pubDate={rssData.pubDate} imageUrl={rssData.imageUrl} episodes={rssData.episodes}  /> ])
                
              })
            }
          }}
        />
      </div>
      </div>
      <div className="rss-content">
        {rssInfoComponent}
        <div className="rss-episode-list">
          {rssEpisodes}
        </div>
    </div>
    </>
  )
}
export default FeedReader