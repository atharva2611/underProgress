import React, { useEffect, useState } from "react";

export const Signin = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="signin-login-form">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input value={name} type="name" placeholder="Enter your name" id="name" name="name" />
                <label htmlFor="Email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Enter your password" id="password" name="password" />
                <button type="submit">Sign In</button>
            </form>
            <p>Already have an account?
                <button onClick={() => props.onFormSwitch('login')}>Log in </button>
            </p>
        </div>
    )
}