import React from "react";
import "./Dot.css";
export interface Props {
  title: string;
}
const Dot: React.FC<Props> = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="container">
          <div className="row">
            <a
              href="#"
              className="intro-banner-vdo-play-btn pinkBg"
              target="_blank"
            >
              <i
                className="glyphicon glyphicon-play whiteText"
                aria-hidden="true"
              ></i>
              <span className="ripple pinkBg"></span>
              <span className="ripple pinkBg"></span>
              <span className="ripple pinkBg"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dot;
