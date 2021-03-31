import './App.css';
import NavMenu from './components/Header/NavMenu';
import NavSearch from './components/Header/NavSearch';
import Movies from './components/MovieList/Movies';

function App() {

  return (
    <div className="App">
      <NavMenu />
      <NavSearch />
      <Movies />
    </div>
  );
}

export default App;
