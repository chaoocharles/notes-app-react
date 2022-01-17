import { GlobalStyles } from "./components/Global.styles";
import NavBar from "./components/layout/NavBar";
import AddNote from "./components/notes/AddNote";
import Notes from "./components/notes/Notes";
import { NotesProvider } from "./components/notes/NotesContext";

function App() {
  return (
    <NotesProvider>
      <GlobalStyles />
      <div>
        <NavBar />
        <AddNote />
        <Notes />
      </div>
    </NotesProvider>
  );
}

export default App;
