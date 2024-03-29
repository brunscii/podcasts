import EpisodeListItem, { EpisodeListItemProps } from "./EpisodeListItem.tsx";

interface RSSInfoSectionProps{
  url: string;
  title: string;
  description: string;
  imageUrl?: string;
  pubDate: string;
  episodes?: EpisodeListItemProps[];
}

async function addFeed(url: string, title: string, feedLink: string){
  const options = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      }
  };

  try{
    const post = JSON.stringify({ 'name' : title, 'link' : feedLink})
    const res = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json'}, body: post });
    if(res.ok){
      console.log('POST OK')
    } else {
      console.error('POST not OK', res.status, res.statusText)
    }

  }catch( e ){
    console.error('Error with POST', e);
    }
}
    

function RSSInfoSection( props : RSSInfoSectionProps ){

  return (
    <>
    <div className="rss-info-box">
      <div className="rss-info-box-grid">
        <img src={props.imageUrl} alt="podcast IMG" className="rss-info-image" />
        <div className="rss-info-box-title-box">
          
          

          <h2>{props.title}</h2>
          <div className="date-and-sub">
            <p>{ new Date(props.pubDate).toLocaleDateString() }</p>
            <button className="add-feed-button" onClick={ (_e)=>{
              // console.log(props.url)
              addFeed('http://localhost:3000/api/add-feed', props.title, props.url)
            }}>+</button>
          </div>
          <p className="rss-info-box-description">{props.description}</p>
        </div>
      </div>
      
    </div>
    <div className="rss-episode-list">
      {
        props.episodes?.map( (episode)=>{
          return (<EpisodeListItem title={episode.title} 
                                   desription={episode.desription} 
                                   pubDate={new Date(episode.pubDate || '').toLocaleDateString()} 
                                   url={episode.url} 
                                   image={episode.image} />)
        })
      }
      //add pagination buttons here
    </div>
   
    </>
  )

}

export default RSSInfoSection