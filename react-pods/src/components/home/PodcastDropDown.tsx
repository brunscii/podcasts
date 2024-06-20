/* This is the component that is used on the home screen to display the podcast in the subs box.
  This should provide the title, img, and the newest episodes when the drop down icon is clicked.
  This component uses the readRSS function to read in the rss but should be replaced with the props for the podcast later on.

*/

import { RSSInfo } from "../feedReader/FeedReader.tsx";

function PodcastDropDown( props?: RSSInfo ){
  console.log(props?.url)

  

  return <>
  

    <div className='podcast-agg-list-item'>
      <img src="" alt="Show Image" />
      <span>{props?.title}</span>
      <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M4.29289 8.29289C4.68342 7.90237 5.31658 7.90237 5.70711 8.29289L12 14.5858L18.2929 8.29289C18.6834 7.90237 19.3166 7.90237 19.7071 8.29289C20.0976 8.68342 20.0976 9.31658 19.7071 9.70711L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L4.29289 9.70711C3.90237 9.31658 3.90237 8.68342 4.29289 8.29289Z" fill="#000000"></path> </g></svg>
    </div>
    <div >
      <ul>
        <li>Episode 5</li>
        <li>Episode 4</li>
        <li>Episode 3</li>
        <li>Episode 2</li>
        <li>Episode 1</li>
      </ul>
    </div>
   
  
  </>
}

export default PodcastDropDown