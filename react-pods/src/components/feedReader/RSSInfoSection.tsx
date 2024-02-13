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
    <div className="RSSInfoBox">
      <h3>{props.title}</h3>
      <span>{props.description}</span>
      <img src={props.imageUrl} alt="" />

    </div>
    </>
  )

}

export default RSSInfoSection