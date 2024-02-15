interface EpisodeListItemProps {
  title: string;
  desription: string;
  pubDate: string;
  url: string;
  duration: string;
  image: string;
}

function EpisodeListItem( props: EpisodeListItemProps ) {

  return (
    <>
      <div className='episode-list-item'>
        <h3>{props.title}</h3>
        <p>{props.desription}</p>
        <p>{props.duration}</p>
        <p>{props.pubDate}</p>
        <img src={props.image} alt="" />


      </div>
    </>
  )
}

export default EpisodeListItem;