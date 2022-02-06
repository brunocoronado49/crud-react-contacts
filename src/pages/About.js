import React from "react";
import LogoAbout from "../components/about/LogoAbout";
import AboutInfo from "../components/about/AboutInfo";
import "./style.css";

const About = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="column">
          <LogoAbout />
        </div>
        <div className="column">
          <AboutInfo />
        </div>
      </div>
    </div>
  );
};

export default About;
