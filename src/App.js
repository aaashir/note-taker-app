import React, { useEffect, useState } from 'react'
import Navigation from './components/Navigation'
import Routes from './components/Routes'

const App = () => {

  const [activeView, setActiveView] = useState('all-notes')

  const [notes, setNotes] = useState([])

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes'))
    if(storedNotes) {
      setNotes(storedNotes)
    }
  }, [])

  return (
    <div className='home'>
      <Navigation activeView={activeView} setActiveView={setActiveView}/>

      <Routes activeView={activeView} setActiveView={setActiveView} notes={notes} setNotes={setNotes} />
    </div>
  )
}

export default App