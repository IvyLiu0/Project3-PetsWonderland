import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import Columns from "react-columns";
import { Link } from "react-router-dom";

const slideImages = ["/products/bowl2.jpg", "/products/clothes2.jpg", "/products/leash2.jpg"];

const Main = () => {
  return (
    <React.Fragment>
      <div>
        <br />
        <br />
        <Slide easing="ease" className="slide">
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${slideImages[0]})` }}></div>
          </div>
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${slideImages[1]})` }}></div>
          </div>
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${slideImages[2]})` }}></div>
          </div>
        </Slide>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="bigTitle">
        <h2>Popular Items</h2>
      </div>
      <ShowProducts />
    </React.Fragment>
  );
};

function ShowProducts() {
  return (
    <React.Fragment>
      <br />
      <br />
      <br />
      <Columns columns="4">
        <Link to="/products" className="linkproduct">
          <img
            style={{ width: "300px", marginLeft: "30px" }}
            src="/products/bowl3.jpg"
            alt="a"
          />
        </Link>
        <Link to="/products" className="linkproduct">
          <img
            style={{ width: "300px" }}
            src="/products/clothes3.jpg"
            alt="b"
          />{" "}
        </Link>
        <Link to="/products" className="linkproduct">
          <img style={{ width: "300px" }} src="/products/leash2.jpg" alt="c" />
        </Link>
        <Link to="/products" className="linkproduct">
          <img style={{ width: "300px" }} src="/products/toy3.jpg" alt="d" />
        </Link>
        <p
          style={{ marginLeft: "90px", marginTop: "10px", fontWeight: "bold" }}
        >
          Pet Bowl - Amber Orange
        </p>
        <p
          style={{ marginLeft: "90px", marginTop: "10px", fontWeight: "bold" }}
        >
          Shirt - Orange
        </p>
        <p
          style={{ marginLeft: "75px", marginTop: "10px", fontWeight: "bold" }}
        >
          Leash - Amber Orange
        </p>
        <p
          style={{ marginLeft: "90px", marginTop: "10px", fontWeight: "bold" }}
        >
          Pet Toy - Rose
        </p>
      </Columns>
    </React.Fragment>
  );
}

export default Main;
