import React from "react";
import PropType from 'prop-types';

class NewNoteForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            body: "",
        };
    }

    render() {
        return (
            <form onSubmit={this.props.onSubmit}>
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={this.state.title}
                    onChange={(e) => this.setState({ title: e.target.value })}
                />
                <input
                    type="text"
                    name="body"
                    placeholder="Body"
                    value={this.state.body}
                    onChange={(e) => this.setState({ body: e.target.value })}
                />
                <button type="submit">Submit</button>
            </form>
        );
    }
}

NewNoteForm.propTypes = {
    onSubmit: PropType.func.isRequired
}

export default NewNoteForm;