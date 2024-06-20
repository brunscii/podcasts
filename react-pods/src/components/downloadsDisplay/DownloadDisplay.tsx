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
  console.log([props])

  return (
    <div className = 'downloads-display hidden'>

    </div>
  )


}

export default DownloadDisplay