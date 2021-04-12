import React, { FC } from "react";
import "./app.css";
import * as styles from "./index.scss";
import Portfolio from "./components/portfolio/Portfolio";
import Nav from "./components/Navbar/Nav";
import BackgroundPic from "./components/backgroundPic/BackgroundPic";
import Project from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";

const App: React.FC<{}> = () => {
  return (
    <div className="title-container">
      <div>
        <Nav />
      </div>
      <div>
        <BackgroundPic />
      </div>
      <br />
      <div className="contianer">
        <Project />
        <Portfolio />
        <Footer />
      </div>
    </div>
  );
};

export default App;
