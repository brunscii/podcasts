import EpisodeListItem, { EpisodeListItemProps } from "./EpisodeListItem";

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
      <h2>{props.title}</h2>
      <span>{ (new Date(props.pubDate) ).toUTCString() }</span>
      <br />
      <span>{props.description}</span>
      <img src={props.imageUrl} alt="podcast IMG" className="rss-info-image" />
      
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