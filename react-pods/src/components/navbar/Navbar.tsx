import "./Navbar.css";

function selectThis( selector: string ){
    switch( selector ){
        case 'home-screen':
            document.querySelector('.feed-reader')?.classList.add('hidden')
            document.querySelector('.downloads-screen')?.classList.add('hidden')
            document.querySelector('.home-screen')?.classList.remove('hidden')
            break;
        case 'feed-reader':
            document.querySelector('.home-screen')?.classList.add('hidden')
            document.querySelector('.downloads-screen')?.classList.add('hidden')
            document.querySelector('.feed-reader')?.classList.remove('hidden')
            break;
        case 'downloads-screen':
            document.querySelector('.home-screen')?.classList.add('hidden')
            document.querySelector('.feed-reader')?.classList.add('hidden')
            document.querySelector('.downloads-screen')?.classList.remove('hidden')
            break;
        default:
            document.querySelector('.home-screen')?.classList.add('hidden')
            document.querySelector('.feed-reader')?.classList.add('hidden')
            document.querySelector('.downloads-screen')?.classList.add('hidden')
            break;

    }
}


function Navbar(){

    return (
    <>
        <div className='navbar'>
            <ul >
                <li onClick={()=>selectThis('home-screen')}>Home</li>
                <li onClick={()=>selectThis('feed-reader')}>RSS Lookup</li>
                <li onClick={()=>selectThis('downloads-screen')}>Downloads</li>
            </ul>       
        </div>
    </>)

}

export default Navbar