import { useState, useContext } from "react";
import { NotesContext } from "./NotesContext";
import { v4 as uuidv4 } from "uuid";

const AddNote = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const [notes, setNotes] = useContext(NotesContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setNotes((prevNotes) => [
      { title: title, desc: desc, id: uuidv4() },
      ...prevNotes,
    ]);

    setTitle("");
    setDesc("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        type="text"
        placeholder="Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <button>Add Note</button>
    </form>
  );
};

export default AddNote;
