/*
  This is the component to display any downloaded podcasts. 
  It should show each podcast as a tile with the name, image, title, pubDate, and runtime.
  The style of the tile depends on the view chosen by a selector/preference.

  Props: The dir of the downloads

  Author: Chris Carlin

*/

interface DownloadDisplayProps {
  workingDir? : string;
  className? : string
}

function DownloadDisplay( props : DownloadDisplayProps ) {
  


  return (
    <div className = { props.className ? props.className : ''}>

    </div>
  )


}

export default DownloadDisplay