import React from "react";
const Nav: React.FC = () => {
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
          <a className="navbar-brand">Welcome</a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Contact Me</a>
              </li>
            </ul>
            <div className="d-flex"></div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
