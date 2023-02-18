import React, { useEffect, useState } from "react";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="signin-login-form">
            <form onSubmit={handleSubmit}>
                <label htmlFor="Email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Enter your password" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            <p>Don't have an account? 
             <button onClick={() => props.onFormSwitch('signin')}>Sign in </button>
            </p>
        </div>
    )
}


{/* <div className="user-account">
        {
          currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Signin onFormSwitch={toggleForm} />
        }
      </div> */}