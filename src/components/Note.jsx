import React, { useEffect } from 'react'

const Note = ({ title, desc }) => {

	const noteContainer = 'flex flex-col gap-4 w-[300px] h-[350px] py-4 px-8 bg-themePrimaryColor rounded-md text-themeSecondaryColor shadow-lg'
	const noteTitle = 'text-[26px] font-bold underline'
	const noteDesc = 'text-xl font-base text-themeSecondaryColor text-wrap break-all overflow-scroll no-scrollbar'

	return (
	<div className={noteContainer}>
			<p className={noteTitle}>{title}</p>
			<p className={noteDesc}>{desc}</p>
		</div>
	)
}

export default Note