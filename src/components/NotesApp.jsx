import React from "react";
import Header from "./Header";
import NotesList from "./NotesList";
import SearchForm from "./SearchForm";
import Footer from "./Footer";
import { getInitialData } from "../utils/data";

class NotesApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
        };
    }

    render() {
        return (
            <>
                <Header />
                <main className="main">
                    <NotesList notes={this.state.notes} />
                </main>
                <Footer />
            </>
        );
    }
}

export default NotesApp;