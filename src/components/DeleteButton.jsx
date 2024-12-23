import PropTypes from 'prop-types';

function DeleteButton({ id, onDelete }) {
    return (
        <button type="button" className='notes__delete' onClick={() => onDelete(id)}>
            <span className="material-symbols-outlined">delete</span>
            <span>Delete</span>
        </button>
    );
}

DeleteButton.propTypes = {
    id: PropTypes.number.isRequired,
    onDelete: PropTypes.func.isRequired
}

export default DeleteButton