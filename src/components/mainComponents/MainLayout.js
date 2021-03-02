import React, { Component } from "react";

import "../../styles/components/mainComponents/mainLayout.css";
import { SideBar } from "./SideBar";

export class MainLayout extends Component {
  static displayName = MainLayout.name;

  render() {
    return (
      <div id="site-layout">
        <div id="site-sidebar">
          <SideBar />
        </div>
        <div id="site-children">{this.props.children}</div>
      </div>
    );
  }
}
