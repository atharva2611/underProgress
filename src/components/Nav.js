import React from "react";
import "../styles/App.css";
import logo from "../image-folder/redbus_logo.png"

export default function Nav() {

  // const logo = 

  return (
    <div id="nav-bar">
      <div id="navbar-left">
        <img src={logo} alt="redbus" />
      </div>
      <div id="navbar-right">
        <a href="#">Home</a>
        <a href="#">About us</a>
        <a href="#">Contact us</a>
      </div>
    </div>
  );
}
