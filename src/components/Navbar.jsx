import * as React from "react";

import "../styles/home.css";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="main-inner-cont">
      <div className="nav-cont">
        <div className="nav-text">Heart Disease Prediction System</div>
        <div className="nav-control-cont">
          <div className="nav-item">
            <Link to="/home" style={{ textDecoration: "none", color: "rgb(236, 62, 62)" }}>
              Home
            </Link>
          </div>
          <div className="nav-item">
            <Link to="/history" style={{ textDecoration: "none", color: "rgb(236, 62, 62)" }}>
              View Results
            </Link>
          </div>
          <div className="nav-item">
            <Link to="/prediction" style={{ textDecoration: "none", color: "rgb(236, 62, 62)" }}>
              Prediction
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
