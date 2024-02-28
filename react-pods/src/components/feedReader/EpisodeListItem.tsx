import './FeedReader.css'
export interface EpisodeListItemProps {
  title: string;
  desription: string;
  pubDate?: string;
  url: string;
  duration?: string;
  image?: string;
}



function EpisodeListItem( props: EpisodeListItemProps ) {

  // let parser : DOMParser = new DOMParser()
  // let description:Document = parser.parseFromString(props.desription,"text/html")
  console.log(props.image)
  return (
    <>
      <div className='episode-list-item'>

        <div className="episode-list-item-img-title-grid">

          {props.image ? <img src={props.image} alt="" className="episode-img" loading="lazy"/> : null }
          
          <div className="episode-title-box">
            <h3 className="episode-title">{props.title}</h3>
            {props.pubDate ? <p className="episode-pubDate">{props.pubDate}</p> :  null }
            {props.duration ? <p className="episode-duration">{props.duration}</p> : null }
            {props.url ? <a href={props.url} target='_blank'>Play</a> : null}
          </div>

        </div>
        
        <p>{props.desription}</p>


      </div>
    </>
  )
}

export default EpisodeListItem;