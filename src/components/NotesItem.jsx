import PropTypes from 'prop-types';
import CustomButton from './CustomButton';
import { showFormattedDate } from '../utils/data'
function NotesItem({ note, onDelete, onArchive }) {
    return (
        <div className="notes__item">
            <h3 className="notes__title">{note.title}</h3>
            <p className="notes__createdAt">{showFormattedDate(note.createdAt)}</p>
            <p className="notes__body">{note.body}</p>
            <div className='notes__action'>
                <CustomButton id={note.id} type={note.archived ? 'unarchive' : 'archive'} onClickHandler={onArchive} />
                <CustomButton id={note.id} type='delete' onClickHandler={onDelete} />
            </div>
        </div>
    );
}

NotesItem.propTypes = {
    note: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired,
    onArchive: PropTypes.func.isRequired
}

export default NotesItem