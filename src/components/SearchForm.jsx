import React from "react";

class SearchForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            keyword: ''
        }

    }

    onKeywordChange = (e) => {
        this.setState({ keyword: e.target.value })
    }

    render() {
        return (
            <div className="search">
            <form>
                <input
                    type="text"
                    name="keyword"
                    placeholder="Search Contact"
                    value={this.state.keyword}
                    onChange={this.onKeywordChange}
                />
            </form>
            </div>
        )
    }
}

export default SearchForm