import "./Navbar.css";

function selectThis( selector: string ){
  const panes = ['home-display', 'queue-display', 'feed-reader', 'downloads-display']
  for( let p of panes ){
    if(p === selector){
      document.querySelector(`.${p}`)?.classList.remove('hidden')
      document.querySelector(`.nav-btn-${p}`)?.classList.add('nav-selected')

    } else{
      document.querySelector(`.${p}`)?.classList.add('hidden')
      document.querySelector(`.nav-btn-${p}`)?.classList.remove('nav-selected')
    }
      
  
  }
    // switch( selector ){
    //     case 'home-display':
    //         document.querySelector('.feed-reader')?.classList.add('hidden')
    //         document.querySelector('.queue-display')?.classList.add('hidden')
    //         document.querySelector('.downloads-display')?.classList.add('hidden')
    //         document.querySelector('.home-display')?.classList.remove('hidden')
    //         break;
    //     case 'queue-display':
    //         document.querySelector('.feed-reader')?.classList.add('hidden')
    //         document.querySelector('.home-display')?.classList.add('hidden')
    //         document.querySelector('.downloads-display')?.classList.add('hidden')
    //         document.querySelector('.queue-display')?.classList.remove('hidden')
    //         break;
    //     case 'feed-reader':
    //         document.querySelector('.home-display')?.classList.add('hidden')
    //         document.querySelector('.queue-display')?.classList.add('hidden')
    //         document.querySelector('.downloads-display')?.classList.add('hidden')
    //         document.querySelector('.feed-reader')?.classList.remove('hidden')
    //         break;
    //     case 'downloads-display':
    //         document.querySelector('.home-display')?.classList.add('hidden')
    //         document.querySelector('.queue-display')?.classList.add('hidden')
    //         document.querySelector('.feed-reader')?.classList.add('hidden')
    //         document.querySelector('.downloads-display')?.classList.remove('hidden')
    //         break;
    //     default:
    //         document.querySelector('.home-display')?.classList.add('hidden')
    //         document.querySelector('.queue-display')?.classList.add('hidden')
    //         document.querySelector('.feed-reader')?.classList.add('hidden')
    //         document.querySelector('.downloads-display')?.classList.add('hidden')
    //         break;

    // }
}


function Navbar(){

    return (
    <>
        <div className='navbar'>
            <ul >
                <li className="nav-btn-home-display" onClick={()=>selectThis('home-display')}>Home</li>
                <li className="nav-btn-queue-display" onClick={()=>selectThis('queue-display')}>Queue</li>
                <li className="nav-btn-feed-reader" onClick={()=>selectThis('feed-reader')}>RSS Lookup</li>
                <li className="nav-btn-downloads-display" onClick={()=>selectThis('downloads-display')}>Downloads</li>
            </ul>       
        </div>
    </>)

}

export default Navbar