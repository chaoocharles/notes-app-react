import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { useContext } from "react";
import { NotesContext } from "./NotesContext";
import axios from "axios";
import { url } from "./url";

const StyledNote = styled.div`
  max-width: 300px;
  background: cyan;
  padding: 7px;
  margin: 10px;
  position: relative;
`;

const StyledButton = styled.button`
  outline: none;
  border: none;
  background: none;
  position: absolute;
  top: 5px;
  right: 5px;
  font-size: 20px;
  cursor: pointer;
`;

const Note = ({ ourNote }) => {
  const [notes, setNotes] = useContext(NotesContext);

  const handleDelete = async (_id) => {
    console.log(_id);
    try {
      const res = await axios.delete(url + "/api/notes/" + _id);

      console.log(res);

      const newNotes = notes.filter((note) => note._id !== res.data._id);

      setNotes(newNotes);
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = (note) => {
    console.log(note._id);
  };

  return (
    <StyledNote>
      <h2>{ourNote.title}</h2>
      <p>{ourNote.desc}</p>
      <StyledButton onClick={() => handleDelete(ourNote._id)}>
        <FaTimes />
      </StyledButton>
      <button onClick={() => handleUpdate(ourNote)}>Update</button>
    </StyledNote>
  );
};

export default Note;
