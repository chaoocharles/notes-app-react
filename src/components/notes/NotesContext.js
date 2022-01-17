import { useState, createContext } from "react";
import { v4 as uuidv4 } from "uuid";

export const NotesContext = createContext();

export const NotesProvider = (props) => {
  const [notes, setNotes] = useState([
    {
      title: "What is HTML?",
      desc: "HTML is a markup language",
      id: uuidv4(),
    },
    {
      title: "What is CSS?",
      desc: "CSS is Cascading Styles Sheet",
      id: uuidv4(),
    },
    {
      title: "What is JavaScript?",
      desc: "JavaScript is a programming language",
      id: uuidv4(),
    },
  ]);

  return (
    <NotesContext.Provider value={[notes, setNotes]}>
      {props.children}
    </NotesContext.Provider>
  );
};
