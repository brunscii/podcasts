import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/navbar/Navbar.tsx'
import './App.css'
import FeedReader from './components/feedReader/FeedReader.tsx'

function App() {

  // State for the selection on the navbar -- determines what to show in the main section
  const [selection, setSelection] = useState('home')
  
  return (
    <>
      <div className='react-pods'>
      <Navbar />
        <div className='selection-viewer'>
          <FeedReader />
        </div>
      </div>
    </>
  )
}

export default App
