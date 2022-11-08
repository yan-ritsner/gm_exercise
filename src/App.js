import {
  Routes,
  Route,
  Link,
} from "react-router-dom";

import FilmList from "./components/FilmList";
import FilmDetails from "./components/FilmDetails";
import './App.css';


function App() {
  return (
    <div className="App">
      <div>
        <Link to={`/`}>Home</Link>
        <Link to={`/films`}>Films</Link>
      </div>
      <Routes>
        <Route path="/" element={<FilmList />} />
        <Route path="/films" element={<FilmList />} />
        <Route path="/films/:search" element={<FilmList />} />
        <Route path="/film/:id" element={<FilmDetails />} />
      </Routes>
    </div>
  );
}

export default App;
