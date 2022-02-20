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
  width: 100%auto;
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
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const [notes, setNotes] = useContext(NotesContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(url + "/api/notes", {
        title: title,
        desc: desc,
      });

      setNotes((prevNotes) => [
        ...prevNotes,
        { title: res.data.title, desc: res.data.desc, _id: res.data._id },
      ]);
    } catch (err) {
      console.log(err);
    }

    setTitle("");
    setDesc("");
  };

  return (
    <FormContainer>
      <StyledForm onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          type="text"
          placeholder="Description"
          required
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button>Add Note</button>
      </StyledForm>
    </FormContainer>
  );
};

export default AddNote;
