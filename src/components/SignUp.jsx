import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import leftImg from "../image-folder/left-panel-img.jpeg"

export const SignUp = (props) => {
    // const [email, setEmail] = useState('');
    // const [pass, setPass] = useState('');
    // const [name, setName] = useState('');
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    const [inpval, setInpval] = useState({
        name: "",
        email: "",
        password: "",
    });

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

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(email);
    // }

    const closeOverlay = () => {
        if (props.layOver === 2) {
            props.setLayOver(1);
            console.log(props.layOver, "This is called from Login");
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
            console.log("data added successfully");
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
                    <form 
                    // onSubmit={handleSubmit}
                    >
                        <label htmlFor="name">Name: </label>
                        <input
                            // value={name} 
                            onChange={getdata} type="name" placeholder="Enter your name" id="name" name="name" /><br />
                        <label htmlFor="Email">Email: </label>
                        <input
                            // value={email} 
                            onChange={getdata} type="email"
                            placeholder="Enter your email" id="email" name="email" /><br />
                        <label htmlFor="password">Password: </label>
                        <input
                            // value={pass} 
                            onChange={getdata} type="password"
                            placeholder="Enter your password" id="password" name="password" /><br /><br />
                        <button onClick={addData} type="submit">Sign Up</button><br />
                    </form>
                </div>
                <div id="child2">
                    <p>Already have an account?
                        {/* <button onClick={() => props.onFormSwitch('login')}>Log in</button> */}
                        <button><NavLink to="/Login">Log in</NavLink></button>

                    </p>
                </div>
            </div>
        </div>
    )
}