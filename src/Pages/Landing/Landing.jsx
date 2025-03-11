import React, { useState, useEffect } from "react";
import "./Landing.css";
import { Link } from "react-router-dom";

function Landing() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 2000); // Show for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showIntro ? (
        <div className="IntroScreen">
          <h1>Welcome to Ivana Foods !!</h1>
        </div>
      ) : (
        <div className="LandingContainer">
          <Link to="/foods/" className="foods">
            <div className="foods">
              <spline-viewer
                url="https://prod.spline.design/fKilBFQtLdSZ94pB/scene.splinecode"
                style={{ width: "100%", height: "100%" }}
              ></spline-viewer>
            </div>
          </Link>
          <Link to="/rooms/" className="rooms">
            <div className="rooms">
              <spline-viewer
                url="https://prod.spline.design/SfXgF8XAfq3V5vRg/scene.splinecode"
                style={{ width: "100%", height: "100%" }}
              ></spline-viewer>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Landing;
