import React from 'react'
import Note from './Note'
import { FaTrashAlt } from 'react-icons/fa'

const DeletedNotes = ({ deletedNotes=[], handleRestore }) => {
	return (
		<div className='h-full flex justify-center items-center page-animation'>
			<div className='flex justify-center items-center flex-wrap gap-4 w-full'>
				{
					deletedNotes.length>=1 ?
					deletedNotes.map(({ id, title, desc }) => (
						<Note title={title} desc={desc} deleted={true} handleRestore={() => handleRestore({ id, title, desc })}/>
					)) :
					<p className='flex items-center gap-4 text-themePrimaryColor text-3xl'><FaTrashAlt /> No recently deleted notes</p>
				}
			</div>
		</div>
	)
}

export default DeletedNotes