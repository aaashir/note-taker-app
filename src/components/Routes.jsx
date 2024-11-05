import React from 'react'
import AllNotes from './AllNotes'
import AddNote from './AddNote'
import DeletedNotes from './DeletedNotes'

const Routes = ({ activeView, setActiveView, notes, setNotes }) => {

	const showActiveScreen = () => {
		switch (activeView) {
			case 'all-notes':
				return <AllNotes notes={notes}/>
			case 'add-note':
				return <AddNote notes={notes} setNotes={setNotes} setActiveView={setActiveView}/>
			case 'deleted-notes':
				return <DeletedNotes />
			case 'all-notes':
				return <AllNotes />
			default:
				return <AllNotes />
		}
	}

	return (
		<div className='w-[80%] h-screen'>
			{showActiveScreen()}
		</div>
	)
}

export default Routes