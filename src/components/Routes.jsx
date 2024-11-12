import React from 'react'
import AllNotes from './AllNotes'
import AddNote from './AddNote'
import DeletedNotes from './DeletedNotes'
import { EditNote } from './EditNote'

const Routes = ({ activeView, setActiveView, notes, setNotes, deletedNotes, handleDelete, handleRestore, handleEditNote, setSelectedNote, selectedNote }) => {

	const showActiveScreen = () => {
		switch (activeView) {
			case 'all-notes':
				return <AllNotes notes={notes} handleDelete={handleDelete} setActiveView={setActiveView} setSelectedNote={setSelectedNote}/>
			case 'add-note':
				return <AddNote notes={notes} setNotes={setNotes} setActiveView={setActiveView}/>
			case 'deleted-notes':
				return <DeletedNotes deletedNotes={deletedNotes} handleRestore={handleRestore} />
			case 'all-notes':
				return <AllNotes notes={notes}/>
			case 'edit-note':
				return <EditNote selectedNote={selectedNote} handleDelete={handleDelete} handleEditNote={handleEditNote} setActiveView={setActiveView}/>
			default:
				return <AllNotes notes={notes}/>
		}
	}

	return (
		<div className='w-[80%] h-screen'>
			{showActiveScreen()}
		</div>
	)
}

export default Routes