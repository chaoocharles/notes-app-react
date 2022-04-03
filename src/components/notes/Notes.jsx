import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Note from "./Note";
import { NotesContext } from "./NotesContext";
import axios from "axios";
import { url } from "./url";

const StyledNotes = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Notes = () => {
  const { notesState } = useContext(NotesContext);

  const [notes, setNotes] = notesState;

  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(url + "/api/notes");
      setLoading(false);
      setNotes(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <StyledNotes>
      {isLoading ? <p>Loading...</p> : null}
      {notes && notes.map((note) => <Note ourNote={note} key={note._id} />)}
    </StyledNotes>
  );
};

export default Notes;
