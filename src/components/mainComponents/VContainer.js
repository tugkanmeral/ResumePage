import React, { Component } from "react";

import "../../styles/components/mainComponents/container.css";

export class VContainer extends Component {
  static displayName = VContainer.name;

  render() {
    const componentStyle = {
      ...this.props.style
    };

    return <div className="v-container" style={componentStyle}>{this.props.children}</div>;
  }
}
