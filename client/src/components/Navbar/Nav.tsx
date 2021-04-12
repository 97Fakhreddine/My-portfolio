import React, { useState } from "react";
import "./nav.css";
import logo from "../../assets/animal-2028258_960_720.webp";
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
      <nav className="navbar navbar-expand-lg navbar-light bg-gradient">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <img src={logo} alt="logo..." className="logo" />
              </li>
            </ul>
            <div className="d-flex">
              <i className="ui github icon" onClick={goToGithub}></i>
              <i className="ui facebook icon" onClick={goToFacebook}></i>
              <i className="ui linkedin icon" onClick={goToLinkedin}></i>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
