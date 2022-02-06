import React from "react";
import Logo from "../components/home/Logo";
import Info from "../components/home/Info";
import "./style.css";

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="column">
          <Logo />
        </div>
        <div className="column">
          <Info />
        </div>
      </div>
    </div>
  );
};

export default Home;
