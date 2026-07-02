import React,{useState,createContext} from "react";

export const NoteContext=createContext()

export default function NotesProvider({children}){
    const [showForm, setShowForm] = useState(false);
    const [editingNote, setEditingNote] = useState(null);
    const [view, setView] = useState("all");
    const [error, setError] = useState({});
    const [darkMode, setDarkMode] = useState(false);
    const [search, setSearch] = useState("");
    const [notes, setNotes] = useState([]);

    const openForm = () => {
    setEditingNote(null);
    setShowForm(true);
    };

    const closeForm = () => {
        setShowForm(false);
    };
    return (
    <NoteContext.Provider
      value={{
        notes,
        setNotes,
        //manage form display
        showForm,
        setShowForm,
        //manage editing or not
        editingNote,
        setEditingNote,
        //manage filtering of display view
        view,
        setView,
        //managing errors in form validation
        error,
        setError,
        //managing theme
        darkMode,
        setDarkMode,
        //manage search functionaality
        search,
        setSearch,
        //functions that used for open and close form
        openForm,
        closeForm,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
}

