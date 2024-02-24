import EpisodeListItem, { EpisodeListItemProps } from "./EpisodeListItem.tsx";

interface RSSInfoSectionProps{
  title: string;
  description: string;
  imageUrl?: string;
  pubDate: string;
  episodes?: EpisodeListItemProps[];
}


function RSSInfoSection( props : RSSInfoSectionProps ){

  return (
    <>
    <div className="rss-info-box">
      <div className="rss-info-box-grid">
        <img src={props.imageUrl} alt="podcast IMG" className="rss-info-image" />
        <div className="rss-info-box-title-box">
          <h2>{props.title}</h2>
          <p>{ props.pubDate }</p>
          <p>{props.description}</p>
        </div>
      </div>
      
    </div>
    <div className="rss-episode-list">
      {
        props.episodes?.map( (episode)=>{
          return (<EpisodeListItem title={episode.title} desription={episode.desription} pubDate={episode.pubDate} url={episode.url} image={episode.image} />)
        })
      }
    </div>
   
    </>
  )

}

export default RSSInfoSection