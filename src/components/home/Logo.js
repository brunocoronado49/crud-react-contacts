import React from "react";
import ReactLogo from "../../assets/react.svg";
import "../css/styles.css";

const Logo = () => {
  return (
    <div className="logo">
      <img src={ReactLogo} alt="react-logo" />
    </div>
  );
};

export default Logo;
