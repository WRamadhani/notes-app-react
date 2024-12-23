import PropTypes from 'prop-types'

function ArchiveButton({ id, onArchive }) {
    return (
        <button type="button" className='notes__archive' onClick={() => onArchive(id)}>
            <span className="material-symbols-outlined">archive</span>
            <span>Archive</span>
        </button>
    );
}

ArchiveButton.propTypes = {
    id: PropTypes.number.isRequired,
    onArchive: PropTypes.func.isRequired
}

export default ArchiveButton