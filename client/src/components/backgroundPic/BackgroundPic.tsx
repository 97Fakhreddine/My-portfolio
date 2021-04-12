import React from "react";
import Header from "../Header/Header";
import Particle from "../Particles/Particles";
const BackgroundPic: React.FC = () => {
  return (
    <div>
      <div>
        <Particle />
        <Header />
      </div>
      <img
        src="https://images.pexels.com/photos/176851/pexels-photo-176851.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="background"
      />
    </div>
  );
};

export default BackgroundPic;
