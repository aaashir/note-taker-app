import React, { useState } from 'react'
import { FiLoader } from 'react-icons/fi'
import { v4 as uuidv4 } from 'uuid';

const AddNote = ({ notes, setNotes, setActiveView }) => {

	const [title, setTitle] = useState('')
	const [desc, setDesc] = useState('')

	const [loading, setLoading] = useState(false)

	const handleAddNote = () => {
		setLoading(true)

		const newNote = {
			id: uuidv4(),
			title,
			desc,
		}

		setNotes([...notes, newNote])

		localStorage.setItem('notes', JSON.stringify([...notes, newNote]))

		setTimeout(() => {
			setTitle('')
			setDesc('')
			setLoading(false)
			setActiveView('all-notes')
		}, 3000)
	}

	return (
		<div className='h-full grid place-items-center page-animation'>
			<div className='flex flex-col gap-4 w-[400px]'>
				<p className='text-themePrimaryColor text-4xl mb-4'>Add a new note:</p>
				<input className='add-note-input' type="text" placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)}/>
				<textarea className='add-note-input w-full h-[300px]' type="text" placeholder='Description' value={desc} onChange={(e) => setDesc(e.target.value)}/>

				<button onClick={handleAddNote} disabled={loading}>
					{loading ? <><FiLoader className='animate-spin'/> Adding</> : '+ Add'}
				</button>
			</div>
		</div>
	)
}

export default AddNote