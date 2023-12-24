import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import SearchPage from './pages/SearchPage'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
              <Route path="/" exact element={<Home/>} />
              <Route path="/search" element={<SearchPage/>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
