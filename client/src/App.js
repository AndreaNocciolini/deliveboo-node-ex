import React, { useState } from "react";
import './App.css';

// import components
import Home from "./components/Home";
import About from "./components/About";
import Show from "./components/Show";

import {
  BrowserRouter as Router, //<BrowserRouter> will be <Router>
  Routes,
  Route,
  // Navigate,
} from "react-router-dom";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <svg
          className="My-logo"
          viewBox="0 0 24 24"
          xmlns="<http://www.w3.org/2000/svg>"
          width="20%"
        >
          <defs>
            <linearGradient id="myGradient">
              <stop offset="0%" stop-color="green" />
              <stop offset="100%" stop-color="white" />
            </linearGradient>
          </defs>
          <circle
            cx="12" cy="12" r="8"
            strokeWidth="4" stroke="url(#myGradient)"
            fill="none"
          />


        </svg>
        <p>DeliveBoo</p>

      </header>

      <main>
        <Router>
          <Routes>

            <Route exact path="/" element={<Home />} />

            <Route path="/about" element={<About />} />

            <Route path="/show" element={<Show />} />

          </Routes>
        </Router>
      </main>

    </div>
  );
}

export default App;
