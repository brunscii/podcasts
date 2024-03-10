
interface PodcastScrollableListProps{
  podcasts: {
    name: string;
    link: string;
  }[]
}


function PodcastScrollableList( props?: PodcastScrollableListProps ){
  console.log(props?.podcasts)
  return <>
  {props?.podcasts.map( (pod)=>{
    <div className='podcast-agg-list-item'>
      <span>{pod.name}</span><span>{pod.link}</span>
    </div>
  } 
  )}
  </>
}

export default PodcastScrollableList