import "../styles/App.css";
import React, { useEffect } from "react";
import logo from "../image-folder/redbus_logo.png"
import profile from "../image-folder/profile.png"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";


export default function Nav(props) {
  // for toggle login-logout
  const [state, setState] = useState(1);
  const navigate = useNavigate();
  // for profile icon toggle
  const [checked, setChecked] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  // const [layOver, setLayOver] = useState(1);

  // Getting user login data from localStorage for icon name
  // const getuserArr = JSON.parse(localStorage.getItem('user_login'));
  // console.log(getuserArr);
  // console.log(getuserArr);

  useEffect(() => {
    const forStateChangeData = localStorage.getItem("forStateChangeData");
    const c = Number(forStateChangeData);
    if (c === 5) {
      setState(2);
      localStorage.removeItem("forStateChangeData");
    }
  }, [props.count]);

  const openLoginForm = () => {
    if (props.layOver === 1) {
      props.setLayOver(2);
    }
  };

  const changeState = () => {
    if (state === 2)
      setState(1);
    toggleMenu();
  }

  let subMenu = document.getElementById("subMenu");

  function toggleMenu() {
    if (checked)
      setChecked(0);
    else
      setChecked(1);
  }

  return (
    <div id="nav-bar">
      <div id="navbar-left">
        <img src={logo} alt="redbus" />
      </div>
      <div id="navbar-right">
        <a id="home" href="/">Home</a>
        <a id="help" href="#">Help</a>
        <img src={profile} id="profile" onClick={toggleMenu} />
        <span id="show-user-name" style={{ color: "white" }}></span>
        {checked ?
          <div className="sub-menu-wrap" id="subMenu">
            <div className="sub-menu">
              <div className="user-info">
              </div>
              {state == 1 ?
                <Link
                  onClick={changeState}
                  to={"Login"}
                  style={{ textDecoration: "none", color: "black", width: 60, height: 30 }}
                >
                  <div className="sub-menu-link">
                    <p
                      onClick={openLoginForm}
                    >Log in</p>
                    <span>&gt;</span>
                  </div>
                </Link>
                :
                <Link onClick={changeState}
                  to={"/"}
                  style={{ textDecoration: "none", color: "black", width: 60, height: 30 }}
                >
                  <div className="sub-menu-link">
                    <p>Log out</p>
                    <span>&gt;</span>
                  </div>
                </Link>
              }
            </div>
          </div>
          : ""}
      </div>
    </div>
  );
}
