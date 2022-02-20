import { useState, createContext } from "react";
import { v4 as uuidv4 } from "uuid";

export const NotesContext = createContext();

export const NotesProvider = (props) => {
  const [notes, setNotes] = useState([]);

  return (
    <NotesContext.Provider value={[notes, setNotes]}>
      {props.children}
    </NotesContext.Provider>
  );
};
