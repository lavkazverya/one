
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

function HomePage() {
  return <h1>Welcome to the Demo, Rick</h1>
}

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //   </header>
    // </div>
    <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  </Router>
  );
}

export default App;
