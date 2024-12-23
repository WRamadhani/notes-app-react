import React from "react";
import PropTypes from 'prop-types';

class NewNoteForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            body: "",
            maxLength: 50
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addNotes(this.state);
        this.setState({ title: "", body: "" });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="new__notes__form">
                <span>Sisa karakter : {this.state.maxLength - this.state.title.length}</span>
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={this.state.title}
                    onChange={(e) => this.setState({ title: e.target.value.slice(0, this.state.maxLength) })}
                    required
                />
                <textarea
                    name="body"
                    placeholder="Body"
                    value={this.state.body}
                    onChange={(e) => this.setState({ body: e.target.value })}
                    required>
                </textarea>
                <button type="submit">Submit</button>
            </form>
        );
    }
}

NewNoteForm.propTypes = {
    addNotes: PropTypes.func.isRequired
}

export default NewNoteForm;