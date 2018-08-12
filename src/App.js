import React, { Component } from "react";
import "./App.css";
import CoinContainer from "./components/CoinContainer";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <CoinContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
