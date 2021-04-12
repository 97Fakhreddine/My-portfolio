import React, { FC } from "react";
import "./app.css";
import Nav from "./components/Navbar/Nav";
import Carrousel from "./components/carrousel/Carrousel";
import Project from "./components/Projects/Projects";
const App: React.FC<{}> = () => {
  return (
    <div>
      <div>
        <Nav />
      </div>
      <div>
        <Carrousel />
      </div>
      <br />
      <div className="contianer">
        <Project />
      </div>
    </div>
  );
};

export default App;
