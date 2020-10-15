import React, { Component } from "react";
import "./App.css";
import Container from "./components/Container";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Container />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect()(App);
