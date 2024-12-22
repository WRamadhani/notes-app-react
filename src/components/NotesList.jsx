
import PropTypes from 'prop-types'
import NotesItem from './NotesItem'
import { showFormattedDate } from '../utils/data'
function NotesList({ notes }) {
    return (
        <div className='notes__list'>
            {notes.map((note) => (
                <NotesItem
                    key={note.id}
                    title={note.title}
                    body={note.body}
                    createdAt={showFormattedDate(note.createdAt)}
                />
            ))}
        </div>   
    )
}

NotesList.propTypes = {
    notes: PropTypes.array.isRequired
}

export default NotesList