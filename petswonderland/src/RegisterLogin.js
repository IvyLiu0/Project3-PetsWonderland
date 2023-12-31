import React, { useState } from "react";
import FacebookLogin from "react-facebook-login";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/petswonderland.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Registration from "./Registration";

function Login() {
  const [login, setLogin] = useState(false); //set up login
  const [data, setData] = useState({}); //set up fb data
  const [picture, setPicture] = useState(""); //set up fb profile image

  const responseFacebook = (response) => {
    console.log(response);
    setData(response);
    setPicture(response.picture.data.url);
    if (response.accessToken) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  };

  return (
    <div class="container">
      <Card style={{ width: "435px" }} className="mx-auto mt-5">
        {!login && (
          <React.Fragment>
            <Card.Header className="pb-4">
              <h1>Sign in</h1>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                {!login && (
                  <React.Fragment>
                    <h3>Please login using one of the following:</h3>
                    {/* Login Form */}
                    <Registration />
                    <br />
                    {/* FB Login Button */}
                    <div className="Facebook">
                      <FacebookLogin
                        appId="3211388012416986"
                        autoLoad={false}
                        fields="name,email,picture"
                        scope="public_profile,user_friends"
                        callback={responseFacebook}
                        icon="fa-facebook"
                      ></FacebookLogin>
                    </div>
                  </React.Fragment>
                )}
              </Card.Text>
            </Card.Body>
          </React.Fragment>
        )}

        {login && (
          <React.Fragment>
            <Card.Header className="pb-4">
              <h1>Check Out</h1>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                <Checked fbpic={picture} fbdata={data} />
              </Card.Text>
            </Card.Body>
          </React.Fragment>
        )}
      </Card>
    </div>
  );
}

// function LoginForm() {
//   return(
//     <form className="border mt-3 mb-5 p-3 bg-white">
//       <label className="m-2">Name:</label><br />
//       <input type="text" name="name" placeholder="Your name"></input><br />
//       <label className="m-2">Email:</label><br />
//       <input type="email" name="email" placeholder="Your Email"></input><br />
//       <input type="submit" value="Login" className="btn bg-success text-white my-3"></input>
//     </form>
//   )
// }

function Checked({ fbpic, fbdata }) {
  return (
    <React.Fragment>
      <br></br>
      <br></br>
      <img src={fbpic} alt={fbdata.name} />
      <h3 className="d-inline text-success mx-2">
        Welcome back {fbdata.name}!
      </h3>
      <br></br>
      <Link to="/Cart">
        <Button className="btn CheckOut" variant="dark">
          Go back to Cart
        </Button>
      </Link>
    </React.Fragment>
  );
}

export default Login;
