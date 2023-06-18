import React, { useState } from "react";
import { Alert } from "react-bootstrap";

function Login() {
  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");

  const [flag, setFlag] = useState(false);

  const [home, setHome] = useState(true);

  function handleLogin(e) {
    e.preventDefault();
    let pass = localStorage
      .getItem("hardikSubmissionPassword")
      .replace(/"/g, "");
    let mail = localStorage.getItem("hardikSubmissionEmail").replace(/"/g, "");
    // .replace(/"/g,"") is used to remove the double quotes for the string

    if (!emaillog || !passwordlog) {
      setFlag(true);
      console.log("EMPTY");
    } else if (passwordlog !== pass || emaillog !== mail) {
      setFlag(true);
    } else {
      setHome(!home);
      setFlag(false);
    }
  }

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
              onChange={(event) => setEmaillog(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(event) => setPasswordlog(event.target.value)}
            />
          </div>
          <br />
          <button type="submit" className="btn btn-dark btn-lg login">
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
