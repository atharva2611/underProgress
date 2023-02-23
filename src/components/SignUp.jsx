import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import leftImg from "../image-folder/left-panel-img.jpeg"

export const SignUp = (props) => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    const [inpval, setInpval] = useState({
        name: "",
        email: "",
        password: "",
    });

    const getdata = (e) => {

        const { value, name } = e.target;

        setInpval(() => {
            return {
                ...inpval,
                [name]: value,
            };
        });
    };

    const closeOverlay = () => {
        if (props.layOver === 2) {
            props.setLayOver(1);
        }
        navigate("/");
    }

    const addData = (e) => {
        e.preventDefault();

        const { name, email, password } = inpval;

        if (name === "") {
            alert("name field is required");
        } else if (email === "") {
            alert("email field is required");
        } else if (!email.includes("@")) {
            alert("email @ required");
        } else if (password === "") {
            alert("pass field is required");
        } else if (password.length < 5) {
            alert("password length is short");
        } else {
            localStorage.setItem("userData", JSON.stringify([...data, inpval]));
        }
    };

    return (
        <div className="signin-login-form">
            <span id="close-btn" onClick={closeOverlay}>×</span>
            <div className="left-panel">
                <img src={leftImg} alt="" />
            </div>
            <div id="main">
                <div id="child1">
                    <form>
                        <label htmlFor="name">Name: </label>
                        <input
                            onChange={getdata} type="name" placeholder="Enter your name" id="name" name="name" /><br />
                        <label htmlFor="Email">Email: </label>
                        <input
                            onChange={getdata} type="email"
                            placeholder="Enter your email" id="email" name="email" /><br />
                        <label htmlFor="password">Password: </label>
                        <input
                            onChange={getdata} type="password"
                            placeholder="Enter your password" id="password" name="password" /><br /><br />
                        <button onClick={addData} type="submit">Sign Up</button><br />
                    </form>
                </div>
                <div id="child2">
                    <p>Already have an account?
                        <button><NavLink to="/Login">Log in</NavLink></button>
                    </p>
                </div>
            </div>
        </div>
    )
}