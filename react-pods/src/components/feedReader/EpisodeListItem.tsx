import { ReactNode } from "react";
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
  let desc = document.createElement('div')
  desc.innerHTML = props.desription
  // console.log(description.body.innerHTML)
  
  return (
    <>
      <div className='episode-list-item'>
        <h3>{props.title}</h3>
        {/* <div ref={ ref => ref?.appendChild(description.body) }></div> */}
        {desc}
        {/* {props.desription?? <p>{props.desription}</p>} */}
        {props.duration ?? <p>{props.duration}</p>}
        {props.pubDate ?? <p>{props.pubDate}</p>}
        {props.image ?? <img src={props.image} alt="" />}


      </div>
    </>
  )
}

export default EpisodeListItem;