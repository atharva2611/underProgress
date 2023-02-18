import React from "react";
import "../styles/App.css";
import logo from "../image-folder/redbus_logo.png"
import profile from "../image-folder/profile.png"
import toggleMenu from "./App"
import { useNavigate } from "react-router-dom";
import { Login } from "./Login";


export default function Nav() {

  const navigate = useNavigate();

  const openLoginPage = () => {
    navigate("Login");
  }

  return (
    <div id="nav-bar">
      <div id="navbar-left">
        <img src={logo} alt="redbus" />
      </div>
      <div id="navbar-right">
        <a id="home" href="#">Home</a>
        <a id="help" href="#">Help</a>
        {/* <a href="#">Contact us</a> */}

        <img src={profile} id="profile" onClick={toggleMenu()}/>

        {/* <div className="sub-menu-wrap" id="subMenu">
          <div className="sub-menu">
            <div className="user-info">
              <h3>This is for demo</h3>
            </div>
            <a href="#" className="sub-menu-link">
              <p onClick={openLoginPage}>Edit profile</p>
              <span>{'>'}</span>
            </a>
            <a href="#" className="sub-menu-link">
              <p>Settings</p>
              <span>{'>'}</span>
            </a>
            <a href="#" className="sub-menu-link">
              <p>Log out</p>
              <span>&gt;</span>
            </a>
          </div>
        </div>  */}

      </div>
    </div>
  );
}
