import React from 'react';
import './App.css';
import Home from './pages/Home/home.js';
import Shelf from './pages/Shelf/shelf.js';
import Genres from './pages/Genres/genres.js';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/shelf" element={<Shelf/>}/>
      <Route path="/genres" element={<Genres/>}/>
      </Routes>
    </div>
  );
}

export default App;
