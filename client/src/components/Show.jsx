import React from "react";
import { Link } from "react-router-dom";

  
function About() {
    return (
        <div>
            <h1>Show Restaurant</h1>
            <ul>
                <li>
                    {/* Endpoint to route to Home component */}
                    <Link to="/">Home</Link>
                </li>
                <li>
                    {/* Endpoint to route to About component */}
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </div>
    );
}
  
export default About;