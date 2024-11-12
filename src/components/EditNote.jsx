import React, { useState } from 'react'
import { FiLoader } from 'react-icons/fi'

export const EditNote = ({ selectedNote, handleDelete, handleEditNote, setActiveView }) => {

	const [noteTitle, setNoteTitle] = useState(selectedNote?.title || '')
	const [noteDesc, setNoteDesc] = useState(selectedNote?.desc || '')
	const [loading, setLoading] = useState(false)

	const handleClickEditNote = () => {
		setLoading(true)

		handleEditNote(
			selectedNote,
			{
				id: selectedNote?.id,
				title: noteTitle,
				desc: noteDesc,
			}
		)

		setTimeout(() => {
			setNoteTitle('')
			setNoteDesc('')
			setLoading(false)
			setActiveView('all-notes')
		}, 1000)
	}

	return (
		<div className='h-full flex flex-col page-animation'>
			<div className='w-full flex items-center h-[100px] bg-white p-4'>
				<input className='w-full ml-[20px] text-[22px] font-medium outline-none focus:underline' value={noteTitle} onChange={(e) => setNoteTitle(e.target.value)}/>
				<button onClick={handleClickEditNote} disabled={loading}>
					{loading ? <><FiLoader className='animate-spin'/> Updating</> : 'Update'}
				</button>
			</div>
			<div className='h-full w-full flex bg-slate-300 p-4'>
				<textarea className='w-full ml-[20px] text-[22px] bg-slate-300 font-medium outline-none focus:underline' value={noteDesc} onChange={(e) => setNoteDesc(e.target.value)}/>
			</div>
		</div>
	)
}
