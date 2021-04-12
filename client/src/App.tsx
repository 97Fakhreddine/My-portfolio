import React, { FC } from "react";
import "./app.css";
// import "./App.scss";
import Portfolio from "./components/portfolio/Portfolio";
import Nav from "./components/Navbar/Nav";
import BackgroundPic from "./components/backgroundPic/BackgroundPic";
import Project from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Particle from "./components/Particles/Particles";
const App: React.FC<{}> = () => {
  return (
    <div>
      <div>
        <Nav />
      </div>
      <div>
        <Particle />
        <BackgroundPic />
        <Header />
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
