import { NavLink, Link } from "react-router-dom";
import NavMenu from "./components/Header/header";
import Movies from "./components/MovieList/movieList";

function App() {
  return (
    <div className="App">
      <NavMenu />
      <Movies />
    </div>
  );
}

export default App;
