import PropType from 'prop-types';

function NotesItem({ title, body, createdAt }) {
    return (
        <div className="notes__item">
            <h3 className="notes__title">{title}</h3>
            <p className="notes__createdAt">{createdAt}</p>
            <p className="notes__body">{body}</p>
            <div className='notes__action'>
                <button className='notes__delete'>
                    <span className="material-symbols-outlined">
                        delete
                    </span>
                    <span>Delete</span>
                </button>
                <button className='notes__archive'>
                    <span className="material-symbols-outlined">
                        archive
                    </span>
                    <span>Archive</span>
                </button>
            </div>
        </div>
    );
}

NotesItem.propTypes = {
    title: PropType.string.isRequired,
    body: PropType.string.isRequired,
    createdAt: PropType.string.isRequired
}

export default NotesItem