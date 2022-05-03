import React, { useState } from "react";
// import logo from './logo.svg';
import './App.css';

// import components
import Home from "./components/Home";
import About from "./components/About";

import {
  BrowserRouter as Router, //<BrowserRouter> will be <Router>
  Routes,
  Route,
  // Navigate,
} from "react-router-dom";

function App() {

  const [data, setData] = useState(null);

  React.useEffect(() => {
    fetch("http://localhost:3001/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <svg
          className="My-logo"
          viewBox="0 0 24 24"
          xmlns="<http://www.w3.org/2000/svg>"
          width="20%"
        >
          <circle
            cx="12" cy="12" r="8"
            strokeWidth="4" stroke="tomato"
            fill="none"
          />

        </svg>
        <p>{!data ? "Loading..." : data}</p>

      </header>

      <main>
        <Router>
          <Routes>

            <Route exact path="/" element={<Home />} />

            <Route path="/about" element={<About />} />

            {/* <Navigate to="/" /> */}
          </Routes>
        </Router>
      </main>

    </div>
  );
}

export default App;
