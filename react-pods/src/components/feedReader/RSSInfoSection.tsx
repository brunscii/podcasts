interface RSSInfoSectionProps{
  title: string;
  description: string;
  imageUrl?: string;
  pubDate: string;
  episodes?: {
    title: string;
    pubDate: string;
    link: string;
  }[];
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
    </>
  )

}

export default RSSInfoSection