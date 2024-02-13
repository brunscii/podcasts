import { useState } from "react";
import "./FeedReader.css"
import RSSInfoSection from "./RSSInfoSection"

function FeedReader() {

  const [inputUrl, setInputUrl] = useState('');

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
          
          }}

          onChange={(e)=>{
            setInputUrl(e.target.value)
          }}
        />
      </div>
      <div className="rss-content">
        
      </div>
    </div>
    </>
  )
}
export default FeedReader