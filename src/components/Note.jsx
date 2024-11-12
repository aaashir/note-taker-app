import React, { useEffect } from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { MdEdit, MdOutlineRestore } from 'react-icons/md'

const Note = ({ id, title, desc, deleted, handleDelete, handleRestore, setActiveView, setSelectedNote }) => {

	const noteContainer = 'relative flex flex-col gap-4 w-[300px] h-[350px] py-4 px-8 bg-themePrimaryColor rounded-md text-themeSecondaryColor shadow-lg'
	const noteTitle = 'text-[26px] font-bold underline'
	const noteDesc = 'text-xl font-base text-themeSecondaryColor text-wrap break-all overflow-scroll no-scrollbar'
	const deleteButton = 'absolute top-4 right-4 cursor-pointer select-none hover:scale-150 transition-all hover:text-red-600 active:scale-110'
	const editButton = 'absolute top-4 right-10 cursor-pointer select-none hover:scale-150 transition-all hover:text-yellow-600 active:scale-110'
	const restoreButton = 'absolute top-4 right-4 cursor-pointer select-none hover:scale-150 transition-all hover:text-yellow-600 active:scale-110'

	const handleSelectNote = () => {
		setSelectedNote({
			id,
			title,
			desc,
		})
		setActiveView('edit-note')
	}

	return (
	<div className={noteContainer}>
			{
				deleted ?
				<MdOutlineRestore
					className={restoreButton}
					onClick={() => handleRestore()}
				/> :
				<div>
					<FaTrashAlt
						className={deleteButton}
						onClick={() => handleDelete()}
					/>
					<MdEdit
						className={editButton}
						onClick={() => handleSelectNote()}
					/>
				</div>
			}
			<p className={noteTitle}>{title}</p>
			<p className={noteDesc}>{desc}</p>
		</div>
	)
}

export default Note