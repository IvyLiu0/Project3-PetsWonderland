import React from "react";
import { Link, BrowserRouter, Route, Routes } from "react-router-dom";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HomeAll } from "./HomeAllItems";
import { Cart } from "./Cart";
import Login from "./RegisterLogin";
import Main from "./Main";
import About from "./About";
import Contact from "./Contact";
// import { AllProducts } from "./AllProducts";
import AllProduct from "./ProductsPage";
// import { Alldata } from "./data/alldata";

export const NavBar = (props) => {
  return (
    <div>
      <BrowserRouter>
        <div className="navItem">
          <h2>
            <Link to="/" className="Logo">
              PetsWonderland
            </Link>
          </h2>
          <div className="navCart">
            {/* <Link to="/signin" className="NavLogin">Login</Link>{" \xa0 "} */}
            <Link to="/cart">
              <FontAwesomeIcon
                icon={faShoppingCart}
                className="faShoppingCart"
              />
            </Link>{" "}
            {props.allList
              .map((item) => item.value)
              .reduce((acc, curr) => acc + curr, 0)}{" "}
            items
          </div>
        </div>
        <br />
        <br />
        <div className="NavBox">
          <nav className="NavBar">
            <Link to="/" className="Nav">
              Home
            </Link>
            {" \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "}
            <Link to="/allproducts" className="Nav">
              Products
            </Link>
            {" \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "}
            <Link to="/about" className="Nav">
              About
            </Link>
            {" \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "}
            <Link to="/contact" className="Nav">
              Contact
            </Link>
            {" \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "}
            <Link to="/signin" className="Nav">
              Register/Login
            </Link>
          </nav>
        </div>

        <Routes>
          <React.Fragment>
            <Route path="/" element={<Main />} />
            <Route path="/allproducts" element={<AllProduct />} />
            <Route
              path="/cartItem"
              element={
                <HomeAll
                  allList={props.allList}
                  handleIncrease={props.handleIncrease}
                  handleDecrease={props.handleDecrease}
                  sortprice={props.sortprice}
                />
              }
            />
            <Route
              path="/Cart"
              element={
                <Cart allList={props.allList} totalvalue={props.totalvalue} />
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signin" element={<Login />}></Route>
          </React.Fragment>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
