import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import leftImg from "../image-folder/left-panel-img.jpeg"


export const Login = (props) => {
    // const [email, setEmail] = useState('');
    // const [pass, setPass] = useState('');
    // const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();
    // const [layOver, setLayOver] = useState(2);

    const closeOverlay = () => {
        if (props.layOver === 2) {
            props.setLayOver(1);
            console.log(props.layOver, "This is called from Login");
        }
        navigate("/");
    }

    const [inpval, setInpval] = useState({
        email: "",
        password: "",
    });

    const [data, setData] = useState([]);

    const handleSubmit = (e) => {
        // e.preventDefault();
        // console.log(email);
    }

    const getdata = (e) => {
        // console.log(e.target.value);

        const { value, name } = e.target;
        // console.log(value,name);

        setInpval(() => {
            return {
                ...inpval,
                [name]: value,
            };
        });
    };

    const addData = (e) => {
        e.preventDefault();

        const getuserArr = localStorage.getItem("userData");
        console.log(getuserArr);

        const { email, password } = inpval;

        if (email === "") {
            alert("email field is required");
        } else if (!email.includes("@")) {
            alert("email @ required");
        } else if (password === "") {
            alert("pass field is required");
        } else if (password.length < 5) {
            alert("password length is short");
        } else {
            if (getuserArr && getuserArr.length) {
                const userdata = JSON.parse(getuserArr);
                const userlogin = userdata.filter((el, k) => {
                    return el.email === email && el.password === password;
                });

                if (userlogin.length === 0) {
                    alert("invalid details");
                } else {
                    console.log("user login succesfully");
                    localStorage.setItem("forStateChangeData", JSON.stringify(5));
                    // props.setCount(2);
                    if(props.count === 0){
                        props.setCount(1);
                    } else {
                        props.setCount(0);
                    }
                    navigate("/");

                    localStorage.setItem("user_login", JSON.stringify(userlogin));

                    //history("/details");
                }
            }
        }
    };

    return (
        <div className="signin-login-form" style={{ background: "lightblue" }}>
            <span id="close-btn" onClick={closeOverlay}>×</span>
            <div className="left-panel">
                <img src={leftImg} alt="" />
            </div>
            <div className="right-panel">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email: </label>
                    <input 
                        //value={email} 
                        onChange={getdata}
                        type="email" placeholder="Enter your email" id="email" name="email" /><br />
                    <label htmlFor="password">Password: </label>
                    <input 
                        // value={pass} 
                        onChange={getdata}
                        type="password" placeholder="Enter your password" id="password" name="password" /><br />
                    <button onClick={addData} type="submit">Log In</button>
                </form>
                <p>Don't have an account?
                    {/* <button onClick={() => props.onFormSwitch('signin')}>Sign Up</button> */}
                    <button><NavLink to="/SignUp">Sign Up</NavLink></button>
                    {/* <span>
                        <NavLink to="/SignUp">Sign Up</NavLink>
                    </span> */}
                </p>
            </div>
        </div>
    )
}


{/* <div className="user-account">
        {
          currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Signin onFormSwitch={toggleForm} />
        }
      </div> */}