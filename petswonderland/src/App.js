import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";
import { Alldata } from "./data/alldata";
import { NavBar } from "./Navbar";
import { Footer } from "./Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alldata: Alldata,
    };
  }

  handleIncrease = (item) => {
    const updateValue = item.value++;
    this.setState({ updateValue });
  };

  handleDecrease = (item) => {
    if (item.value > 0) {
      const updateValue = item.value--;
      this.setState({ updateValue });
    }
  };

  sortprice = (Alldata, sortType) => {
    Alldata.sort((a, b) => {
      switch (sortType) {
        case "normal":
          return a.id - b.id;
        case "lowest":
          return a.price - b.price;
        case "highest":
          return b.price - a.price;
        default:
          return a.id - b.id;
      }
    });
    this.setState({ sortType });
  };


  render() {
    return (
      <div>
        <NavBar
          allList={this.state.alldata}
          handleIncrease={this.handleIncrease}
          handleDecrease={this.handleDecrease}
          sortprice={this.sortprice}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
