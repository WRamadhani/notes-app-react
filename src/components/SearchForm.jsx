import React from "react";
import PropTypes from 'prop-types';

class SearchForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            query: ''
        }

    }

    onQueryChange = (e) => {
        this.setState({ query: e.target.value });
        this.props.onSearch(e.target.value)
    }



    render() {
        return (
            <div className="notes__search">
                <input
                    type="text"
                    name="query"
                    placeholder="Search Notes"
                    value={this.state.query}
                    onChange={this.onQueryChange}
                />
            </div>
        )
    }
}

SearchForm.propTypes = {
    onSearch: PropTypes.func.isRequired
}

export default SearchForm