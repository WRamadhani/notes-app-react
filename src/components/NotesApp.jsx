import React from "react";
import Header from "./Header";
import NotesList from "./NotesList";
import SearchForm from "./SearchForm";
import NewNoteForm from "./NewNoteForm";
import Footer from "./Footer";
import { getInitialData } from "../utils/data";

class NotesApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
            query: ''
        };

        this.onDeleteHandler = this.onDeleteHandler.bind(this)
        this.onArchiveHandler = this.onArchiveHandler.bind(this)
        this.addNotesHandler = this.addNotesHandler.bind(this)
        this.onSearchHandler = this.onSearchHandler.bind(this)
    }

    onDeleteHandler(id) {
        const newNotes = this.state.notes.filter((note) => note.id !== id);
        this.setState({ notes: newNotes });
    }

    onArchiveHandler(id) {
        const newNotes = this.state.notes.map((note) => {
            note.archived = note.id === id ? !note.archived : note.archived;
            return note;
        })
        this.setState({ notes: newNotes })
    }

    addNotesHandler(note) {
        this.setState((prevState) => {
            return {
                notes: [...prevState.notes, {
                    id: Date.now(),
                    archived: false,
                    createdAt: new Date().toISOString(),
                    ...note,
                }],
            };
        });
    }

    onSearchHandler(query) {
        this.setState({ query: query })
    }

    render() {
        return (
            <>
                <Header />
                <main className="main">
                    <SearchForm onSearch={this.onSearchHandler} />
                    <NewNoteForm addNotes={this.addNotesHandler} />
                    <NotesList notes={this.state.notes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} query={this.state.query}/>
                </main>
                <Footer />
            </>
        );
    }
}

export default NotesApp;