export const updateNotes = (dbId, updatedNotes, setNotes) => {
	setNotes(updatedNotes)
	localStorage.setItem(dbId, JSON.stringify(updatedNotes)) // Local storage
}