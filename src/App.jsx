import { useState, useEffect } from "react";
import Main from "./widgets/Main/Main";
import NavBar from "./widgets/NavBar/NavBar";
import ControlModal from "./widgets/ControlModal/ControlModal";
import AddNoteBtn from "./widgets/AddNoteBTn/AddNoteBtn";
import { v4 as uuidv4 } from 'uuid';
import { toast } from "react-toast";


const App = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [grid, setGrid] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [noteBody, setNoteBody] = useState('');
  const [editNoteData, setEditNoteData] = useState({});
  const [searchController, setSearchController] = useState('');
  

  let filteredNotes = searchController.length > 0 
  ? notes.filter(note => note.title.includes(searchController))
  : notes;
  
  useEffect(() => {
    const allNotes = JSON.parse(localStorage.getItem('notes'))
    if (allNotes) {
      setNotes([...allNotes]);
    }

    const newGrid = localStorage.getItem('grid');
    if (newGrid) {
      setGrid(JSON.parse(newGrid));
    }

  }, [])



  const handleShowSearch = (value) => {
    setShowSearch(value);
  }
  const handleShowModal = (showModalValue, editModeValue = false) => {
    setShowModal(showModalValue);
    setEditMode(editModeValue);
    clearControllerData();
  }
  const addNote = () => {
    if (title && noteBody) {
      const note = {
        id: uuidv4(),
        title: title,
        noteBody: noteBody,
        date: new Date().toLocaleDateString(),
      }
      const allNotes = [...notes, note]
      handleShowModal(false);
      setNotes([...notes, note]);
      localStorage.setItem('notes', JSON.stringify(allNotes));
      toast.success('Заметка добавлена');
    } else {
      toast.error('Заполните все поля');
    }
  }
  const removeNote = (id) => {
    const index = notes.findIndex((note) => note.id === id);
    notes.splice(index, 1);
    const allNotes = [...notes]
    setNotes(allNotes);
    localStorage.setItem('notes', JSON.stringify(allNotes));
    toast.error('Заметка удалена');
  }
  const clearControllerData = () => {
    setTitle('');
    setNoteBody('');
  }
 

  const editNote = () => {
    if (title || noteBody) {
      const note = {
        id: editNoteData.id,
        title: title,
        noteBody: noteBody,
        date: new Date().toLocaleDateString(),
      }
      const editedNoteIndex = notes.findIndex((note) => note.id == editNoteData.id);
      notes[editedNoteIndex] = note;
      setNotes([...notes]);
      handleShowModal(false);
      localStorage.setItem('notes', JSON.stringify(notes));
      toast.success('Заметка обновлена!');
    } else {
      toast.error('Заполните все поля');
    }
  }

  const getEditedNote = (id, value) => {
    const pickedNote = notes.find(note => note.id == id);
    setEditNoteData(pickedNote)
    console.log(pickedNote);
    setShowModal(value);
    setEditMode(value);
  }

  const saveGrid = () => {
    setGrid(prev => {
      const newGrid = !prev;
      localStorage.setItem('grid', JSON.stringify(newGrid));
      return newGrid;
    });
  };

  return (
    <>
      <ControlModal
        showModal={showModal}
        setShowModal={handleShowModal}
        editMode={editMode}
        setTitle={setTitle}
        title={title}
        setNoteBody={setNoteBody}
        noteBody={noteBody}
        addNote={addNote}
        editNote={editNote}
      />

      <AddNoteBtn
        setShowModal={handleShowModal}
        showModal={showModal} />

      <NavBar
        searchController={searchController}
        setSearchController={setSearchController}
        showSearch={showSearch}
        handleShowSearch={handleShowSearch} />
      <Main
        removeNote={removeNote}
        notes={filteredNotes}
        setNotes={setNotes}
        grid={grid}
        saveGrid={saveGrid}
        showSearch={showSearch}
        setShowModal={handleShowModal}
        getEditedNote={getEditedNote}
      />
    </>
  );
}

export default App;