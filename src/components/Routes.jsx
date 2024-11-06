import React from 'react'
import AllNotes from './AllNotes'
import AddNote from './AddNote'
import DeletedNotes from './DeletedNotes'

const Routes = ({ activeView, setActiveView, notes, setNotes, deletedNotes, handleDelete, handleRestore }) => {

	const showActiveScreen = () => {
		switch (activeView) {
			case 'all-notes':
				return <AllNotes notes={notes} handleDelete={handleDelete}/>
			case 'add-note':
				return <AddNote notes={notes} setNotes={setNotes} setActiveView={setActiveView}/>
			case 'deleted-notes':
				return <DeletedNotes deletedNotes={deletedNotes} handleRestore={handleRestore} />
			case 'all-notes':
				return <AllNotes notes={notes}/>
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