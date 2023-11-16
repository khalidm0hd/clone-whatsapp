import React from 'react';
import './App.css';

import { Link, Route, Routes } from "react-router-dom";

import Home from './routes/Home';
import Privacy from './routes/privacy/Privacy';
import Blog from './routes/blog/Blog';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
