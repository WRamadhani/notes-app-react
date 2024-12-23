import PropTypes from 'prop-types'

function CustomButton({ id, type, onClickHandler }) {
    return (
        <button type="button" className={ type === 'archive' ? 'notes__archive' : type === 'unarchive' ? 'notes__unarchive' : 'notes__delete' } onClick={() => onClickHandler(id)}>
            <span className="material-symbols-outlined">{type}</span>
            <span>{type.at(0).toUpperCase() +type.slice(1)}</span>
        </button>
    )
}

CustomButton.propTypes = {
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    onClickHandler: PropTypes.func.isRequired
}

export default CustomButton