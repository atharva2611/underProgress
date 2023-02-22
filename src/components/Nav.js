// const handleAuth = () => {
//   auth.signInWithPopup(provider).then((result) =>{
//     console.log(result)
//   }).catch((error) => {
//     alert(error.message)
//   })
// }

import React, { useEffect } from "react";
import "../styles/App.css";
import logo from "../image-folder/redbus_logo.png"
import profile from "../image-folder/profile.png"
import toggleMenu from "./App"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Login } from "./Login";
import { Link } from "react-router-dom";
import { auth, provider } from "../firebase";


export default function Nav(props) {
  // for toggle login-logout
  const [state, setState] = useState(1);
  const navigate = useNavigate();
  // for profile icon toggle
  const [checked, setChecked] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  // const [layOver, setLayOver] = useState(1);

  // Getting user login data from localStorage for icon name
  // const getuserArr = JSON.parse(localStorage.getItem("user_login"));
  // alert(getuserArr);

  useEffect(() => {
    const forStateChangeData = localStorage.getItem("forStateChangeData");
    // console.log(forStateChangeData);
    const c = Number(forStateChangeData);
    // alert(c);
    if (c === 5) {
      setState(2);
      localStorage.removeItem("forStateChangeData");
    }
  }, [props.count]);


  const openLoginPage = () => {
    navigate("Login");
  }

  const forTest = () => {
    console.log("forTest");
  }

  const openLoginForm = () => {
    if (props.layOver === 1) {
      props.setLayOver(2);
    }
    console.log(props.layOver);
    console.log("Working... go for css");

    // setShowPopup(true);
    // navigate("/");
  };

  const changeState = () => {
    if (state === 2)
      setState(1);
    // else
    //   setState(2);

    toggleMenu();
  }

  let subMenu = document.getElementById("subMenu");
  // console.log("okay",subMenu)

  function toggleMenu() {
    // subMenu.classNameList.toggle("open-menu");
    if (checked)
      setChecked(0);
    else
      setChecked(1);

    console.log("Working");
  }

  return (
    <div id="nav-bar">
      <div id="navbar-left">
        <img src={logo} alt="redbus" />
      </div>
      <div id="navbar-right">
        <a id="home" href="/">Home</a>
        <a id="help" href="#">Help</a>
        {/* <span id="show-user-name" style={{color:"white"}}> abc </span> */}

        {/* <a href="#">Contact us</a> */}

        <img src={profile} id="profile" onClick={toggleMenu} />
        <span id="show-user-name" style={{color: "white"}}></span>
        {checked ?
          <div className="sub-menu-wrap" id="subMenu">
            <div className="sub-menu">
              <div className="user-info">
                {/* <h3>This is for demo</h3> */}
              </div>
              {/* <a href="#" className="sub-menu-link">
                <p onClick={openLoginPage}>Edit profile</p>
                <span>{'>'}</span>
              </a> */}
              {/* <a href="#" className="sub-menu-link">
                <p>Settings</p>
                <span>{'>'}</span>
              </a> */}
              {state == 1 ?
                // <a href="home" className="sub-menu-link" onClick={changeState}><p>Log out</p><span>&gt;</span><
                // <div onClick={changeState} style={{width:60,height:30}}>
                <Link
                  onClick={changeState}
                  // onClick={handleAuth}
                  to={"Login"}
                  style={{ textDecoration: "none", color: "black", width: 60, height: 30 }}
                >
                  <div className="sub-menu-link">
                    <p
                      // onClick={handleAuth}
                      onClick={openLoginForm}
                    >Log in</p>
                    <span>&gt;</span>
                  </div>
                </Link>
                // </div>
                :
                // <div onClick={changeState} style={{width:60,height:30}}>
                <Link onClick={changeState}
                  to={"/"}
                  style={{ textDecoration: "none", color: "black", width: 60, height: 30 }}
                >
                  <div className="sub-menu-link">
                    <p>Log out</p>
                    <span>&gt;</span>
                  </div>
                </Link>
                // </div>
              }

              {/* <a href="#" className="sub-menu-link">
                <p>Log out</p>
              </a> */}
            </div>
          </div>

          : ""}


      </div>
    </div>
  );
}
