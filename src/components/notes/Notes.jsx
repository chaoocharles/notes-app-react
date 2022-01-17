import { useContext } from "react";
import styled from "styled-components";
import Note from "./Note";
import { NotesContext } from "./NotesContext";

const StyledNotes = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Notes = () => {
  const [notes, setNotes] = useContext(NotesContext);

  return (
    <StyledNotes>
      {notes && notes.map((note) => <Note ourNote={note} key={note.id} />)}
    </StyledNotes>
  );
};

export default Notes;
