import React, { Component } from "react";

import "../../styles/components/mainComponents/container.css";

export class HContainer extends Component {
  static displayName = HContainer.name;

  render() {
    const componentStyle = {
      ...this.props.style,
    };

    return <div className="h-container" style={componentStyle}>{this.props.children}</div>;
  }
}
