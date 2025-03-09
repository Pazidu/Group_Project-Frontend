import React from "react";
import "./Landing.css";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div>
      <div className="LandingContainer">
        <Link to="/foods/" className="foods">
          <div className="foods"></div>
        </Link>
        <Link to="/rooms/" className="foods">
          <div className="rooms"></div>
        </Link>
      </div>
    </div>
  );
}

export default Landing;
