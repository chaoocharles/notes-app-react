import { useContext } from "react";
import styled from "styled-components";
import { NotesContext } from "../notes/NotesContext";

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 0 10px;
  color: white;
  background: crimson;
`;

const NavBar = () => {
  const { notesState } = useContext(NotesContext);

  const [notes, setNotes] = notesState;

  return (
    <StyledNav>
      <h3>My Notes</h3>
      <h3>
        <span>{notes && notes.length}</span> Notes
      </h3>
    </StyledNav>
  );
};

export default NavBar;
