import React, { FC } from "react";
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
      <div>
        <Project />
      </div>
    </div>
  );
};

export default App;
