import * as React from "react";

import "../styles/home.css";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="main-inner-cont">
      <div className="nav-cont">
        <div className="nav-text">Heart Disease Prediction System</div>
        <div className="nav-control-cont">
          <div className="nav-item"><Link to="/home">Home</Link></div>
          <div className="nav-item"><Link to="/history">View Results</Link></div>
          <div className="nav-item"><Link to="/prediction">Prediction</Link></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
