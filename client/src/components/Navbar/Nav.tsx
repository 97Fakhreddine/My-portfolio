import React, { useState } from "react";
import "./nav.css";

const Nav: React.FC = () => {
  const [github] = useState<string>("https://github.com/97Fakhreddine");
  const goToGithub = () => {
    window.open(github, "__blank");
  };
  const [facebook] = useState<string>(
    "https://www.facebook.com/Fakhri.Shaarawy/"
  );
  const goToFacebook = () => {
    window.open(facebook, "__blank");
  };
  const [linkedin] = useState<string>(
    "https://www.linkedin.com/in/97fakhreddine/"
  );
  const goToLinkedin = () => {
    window.open(linkedin, "__blank");
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            <h1>Welcome to My Portfolio</h1>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
