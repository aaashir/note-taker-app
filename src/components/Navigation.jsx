import React from 'react'

const Navigation = ({ activeView, setActiveView }) => {

	const changeActiveView = (e) => {
		setActiveView(e.target.id)
	}

	return (
		<div className={`w-[20%] h-screen bg-themePrimaryColor z-[999]`}>
			<p className='text-[40px] text-center'><b>Notes</b> Taker</p>
			<ul className='p-4 flex flex-col items-center gap-[15px] w-[full] text-2xl text-themeSecondaryColor font-bold'>
				<li
					name='test'
					id='all-notes'
					className={`${activeView === 'all-notes' ? 'nav-button-active' : 'nav-button'}`}
					onClick={changeActiveView}
				>
					All Notes
				</li>
				<li
					id='add-note'
					className={`${activeView === 'add-note' ? 'nav-button-active' : 'nav-button'}`}
					onClick={changeActiveView}
				>
					Add Note
				</li>
				<li
					id='deleted-notes'
					className={`${activeView === 'deleted-notes' ? 'nav-button-active' : 'nav-button'}`}
					onClick={changeActiveView}
				>
						Deleted Notes
				</li>
			</ul>
		</div>
	)
}

export default Navigation