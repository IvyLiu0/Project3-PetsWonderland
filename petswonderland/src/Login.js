import React, { useState } from "react";
import {useCookies} from 'react-cookie';
import { Alert } from "react-bootstrap";

function Login() {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [cookies, setCookies] = useCookies(['user']);

  const [flag, setFlag] = useState(false);

  const [home, setHome] = useState(true);


  function handleLogin(e) {
    e.preventDefault();
    let pass = localStorage
      .getItem("hardikSubmissionPassword")
      .replace(/"/g, "");
    let mail = localStorage.getItem("hardikSubmissionEmail").replace(/"/g, "");
    // .replace(/"/g,"") is used to remove the double quotes for the string

    if (!email || !password) {
      setFlag(true);
      console.log("EMPTY");
    } else if (password !== pass || email !== mail) {
      setFlag(true);
    } else {
      setHome(!home);
      setFlag(false);
    }
  }

  const handle = () => {
    setCookies('Email', email, {path:'/'});
    setCookies('Password', password, {path: '/'});
  };

  return (
    <div>
      {home ? (
        <form onSubmit={handleLogin}>
          <h3>Log in</h3>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <br />
          <button
            type="submit"
            className="btn btn-dark btn-lg login"
            onClick={handle}
          >
            Login
          </button>
          <br />
          <br />
          <br />

          {flag && (
            <Alert color="primary" variant="warning">
              Fill correct Info else keep trying.
            </Alert>
          )}
        </form>
      ) : (
        <div style={{ fontSize: "25px", color: "green" }}>
          You have logged in successfully!
          <br />
          <button type="submit" className="btn btn-dark btn-m bcHome">
            <a href="./">Home</a>
          </button>
        </div>
      )}
    </div>
  );
}

export default Login;
