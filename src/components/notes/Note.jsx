import styled from "styled-components";

const StyledNote = styled.div`
  max-width: 300px;
  background: cyan;
  padding: 7px;
  margin: 10px;
  position: relative;
`;

const Note = ({ ourNote }) => {
  return (
    <StyledNote>
      <h2>{ourNote.title}</h2>
      <p>{ourNote.desc}</p>
    </StyledNote>
  );
};

export default Note;
