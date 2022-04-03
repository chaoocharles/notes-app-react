import { useState, useContext } from "react";
import { NotesContext } from "./NotesContext";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import axios from "axios";
import { url } from "./url";

const FormContainer = styled.div`
  width: 300px;
  margin: 1rem auto;
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  input,
  textarea {
    border: 2px solid cyan;
    padding: 7px;
  }
  textarea {
    margin: 1rem 0;
  }
  button {
    color: white;
    background: crimson;
    cursor: pointer;
    outline: none;
    border: none;
    padding: 7px;
  }
`;

const AddNote = () => {
  const { notesState, currentNoteState } = useContext(NotesContext);

  const [notes, setNotes] = notesState;
  const [currentNote, setCurrentNote] = currentNoteState;

  console.log(currentNote);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentNote._id) {
      // update
      const res = await axios.put(
        url + `/api/notes/${currentNote._id}`,
        currentNote
      );

      console.log(res.data);

      const updatedNotes = notes.map((note) =>
        note._id === res.data._id ? res.data : note
      );

      setNotes(updatedNotes);

      setCurrentNote({
        title: "",
        desc: "",
        _id: "",
      });
    } else {
      try {
        const res = await axios.post(url + "/api/notes", currentNote);

        setNotes((prevNotes) => [
          ...prevNotes,
          { title: res.data.title, desc: res.data.desc, _id: res.data._id },
        ]);
      } catch (err) {
        console.log(err);
      }

      setCurrentNote({
        title: "",
        desc: "",
        _id: "",
      });
    }
  };

  return (
    <FormContainer>
      <StyledForm onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          required
          value={currentNote.title}
          onChange={(e) =>
            setCurrentNote({ ...currentNote, title: e.target.value })
          }
        />
        <textarea
          type="text"
          placeholder="Description"
          required
          value={currentNote.desc}
          onChange={(e) =>
            setCurrentNote({ ...currentNote, desc: e.target.value })
          }
        />
        <button>{currentNote._id ? "Update" : "Add Note"}</button> <br />
      </StyledForm>
      <button
        onClick={() =>
          setCurrentNote({
            title: "",
            desc: "",
            _id: "",
          })
        }
      >
        Clear
      </button>
    </FormContainer>
  );
};

export default AddNote;
