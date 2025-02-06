import './main.css';
import Header from "./Header";
import NoteList from "./NoteList";
const Main = ({
    grid,
    saveGrid,
    showSearch,
    setShowModal,
    setNotes,
    notes,
    removeNote,
    getEditedNote,
}) => {
    return (
        <main className="main">
            <Header grid={grid} saveGrid={saveGrid} showSearch={showSearch} notesLength={notes.length}/>
            <NoteList grid={grid} setShowModal={setShowModal} setNotes={setNotes} notes={notes} removeNote={removeNote} getEditedNote={getEditedNote} />
        </main>
    );
}

export default Main;