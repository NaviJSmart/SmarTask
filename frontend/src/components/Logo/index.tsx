import React from "react";
import LogoPNG from "../../assets/logo.png";
import "./Logo.scss";
const Logo = () => {
  return (
    <h1 className="Logo">
      <p>
        <img src={LogoPNG} alt="logo" />
        Smartask
      </p>
    </h1>
  );
};

export default Logo;
