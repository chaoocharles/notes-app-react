import { useState, createContext } from "react";
import { v4 as uuidv4 } from "uuid";

export const NotesContext = createContext();

export const NotesProvider = (props) => {
  const [currentNote, setCurrentNote] = useState({
    title: "",
    desc: "",
    _id: "",
  });

  const [notes, setNotes] = useState([]);

  return (
    <NotesContext.Provider
      value={{
        notesState: [notes, setNotes],
        currentNoteState: [currentNote, setCurrentNote],
      }}
    >
      {props.children}
    </NotesContext.Provider>
  );
};
