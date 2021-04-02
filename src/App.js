import React from 'react';
import './App.scss';
import NavMenu from './components/Header/NavMenu';
import Movies from './components/MovieList/Movies';

function App() {

  return (
    <div className='App'>
      <NavMenu />
      <Movies />
    </div>
  );
}

export default App;
