
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

function EchoPage() {
  return(
    <>
    <h1>Echo Page</h1>
    <hr/>
    <a href="/"><button >Home</button></a>
    </>
  );
}

function ChatPage() {
  return(
    <>
    <h1>Chat Page</h1>
    <hr/>
    <a href="/"><button >Home</button></a>
    </>
  );
}


function HomePage() {
  return(
    <>
    <div className="App">
       <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       </header>
       <h1>Welcome to the Demo, Rick</h1>
       <a href="/echo"><button >Echo</button></a>
       <a href="/chat"><button >Chat</button></a>
    </div>
    </>
  );
}

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/echo" element={<EchoPage />} />
    </Routes>
  </Router>
  );
}

export default App;
