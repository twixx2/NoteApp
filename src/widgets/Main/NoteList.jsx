import NoteListItem from "./NoteListItem";

const NoteList = ({
    grid,
    setShowModal,
    notes,
    setNotes,
    removeNote,
    getEditedNote,
}) => {
    return (
        <section className={`note__list container ${grid ? 'between' : ''}`}>


            {
                notes.map((note) => (
                    <NoteListItem grid={grid} setShowModal={setShowModal} note={note} removeNote={removeNote} getEditedNote={getEditedNote} key={note.id} />
                ))

            }

        </section>
    );
}

export default NoteList;