
import PropTypes from 'prop-types'
import NotesItem from './NotesItem'
function NotesList({ notes, onDelete, onArchive, query }) {
    let activeNotes = notes.filter((note) => !note.archived && note.title.toLowerCase().includes(query.toLowerCase())).reverse();
    let archivedNotes = notes.filter((note) => note.archived && note.title.toLowerCase().includes(query.toLowerCase()));

    return (
        <div className='notes__list'>
            <div>
                <h2 style={{marginBottom: '1rem', textAlign: 'center'}}>Active</h2>
                <div className="notes__list-active">
                    {activeNotes.length === 0 && <p style={{textAlign: 'center'}}>No active notes</p>}
                    {activeNotes.map((note) => (
                        <NotesItem
                            key={note.id}
                            note={note}
                            onDelete={onDelete}
                            onArchive={onArchive}
                        />
                    ))}
                </div>
            </div>
            <div>
                <h2 style={{marginBottom: '1rem', textAlign: 'center'}}>Archived</h2>
                <div className='notes__list-archive'>
                    {archivedNotes.length === 0 && <p style={{textAlign: 'center'}}>No archived notes</p>}
                    {archivedNotes.map((note) => (
                        <NotesItem
                            key={note.id}
                            note={note}
                            onDelete={onDelete}
                            onArchive={onArchive}
                        />
                    ))}
                </div>
            </div>
            
        </div>   
    )
}

NotesList.propTypes = {
    notes: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
    onArchive: PropTypes.func.isRequired,
    query: PropTypes.string
}

export default NotesList