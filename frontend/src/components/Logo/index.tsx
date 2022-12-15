import React from "react";
import LogoPNG from "../../assets/logo.png";
import "./Logo.scss";
const Logo = () => {
  return (
    <h1 className="Logo">
      <img src={LogoPNG} alt="logo" />
      <a href="#">Smartask</a>
    </h1>
  );
};

export default Logo;
