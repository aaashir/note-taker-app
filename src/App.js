import React, { useEffect, useState } from 'react'
import Navigation from './components/Navigation'
import Routes from './components/Routes'
import { updateNotes } from './utils/helpers'

const App = () => {

  const [activeView, setActiveView] = useState('all-notes')

  const [notes, setNotes] = useState([])
  const [deletedNotes, setDeletedNotes] = useState([])

  const handleDelete = (note) => {
    const updatedNotes = notes.filter((n) => n.id !== note.id)
    const updatedDeletedNotes = [ ...deletedNotes, note ]
    updateNotes('deletedNotes', updatedDeletedNotes, setDeletedNotes)
    updateNotes('notes', updatedNotes, setNotes)
	}

	const handleRestore = (note) => {
    const updatedDeletedNotes = deletedNotes.filter((n) => n.id !== note.id)
    const updatedNotes = [ ...notes, note ]
    updateNotes('deletedNotes', updatedDeletedNotes, setDeletedNotes)
    updateNotes('notes', updatedNotes, setNotes)
    setActiveView('all-notes')
	}

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes'))
    if(storedNotes) {
      setNotes(storedNotes)
    }
  }, [])

  return (
    <div className='home'>
      <Navigation activeView={activeView} setActiveView={setActiveView}/>

      <Routes
        activeView={activeView}
        setActiveView={setActiveView}
        notes={notes}
        setNotes={setNotes}
        deletedNotes={deletedNotes}
        setDeletedNote={setDeletedNotes}
        handleDelete={handleDelete}
        handleRestore={handleRestore}
      />
    </div>
  )
}

export default App