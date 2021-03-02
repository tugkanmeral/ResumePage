import React, { Component } from "react";
import { Login } from "../components/subComponents/Login";

import "../styles/pages/backyard.css";

export class Backyard extends Component {
  static displayName = Backyard.name;

  render() {
    return (
      <div id="backyard" className="fill-flex-container">
        <Login />
      </div>
    );
  }
}
