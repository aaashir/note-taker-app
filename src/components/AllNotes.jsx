import React from 'react'
import Note from './Note'

const AllNotes = ({ notes=[], handleDelete, setActiveView, setSelectedNote }) => {

	return (
		<div className='h-full flex justify-center items-center page-animation'>
			<div className='flex justify-center items-center flex-wrap gap-4 w-full'>
				{
					notes.length>=1 ?
					notes.map(({ id, title, desc }) => (
						<Note id={id} title={title} desc={desc} handleDelete={() => handleDelete({ id, title, desc })} setActiveView={setActiveView} setSelectedNote={setSelectedNote}/>
					)) :
					<p className='text-themePrimaryColor text-3xl'>No notes created</p>
				}
			</div>
		</div>
	)
}

export default AllNotes