import React, { Component } from "react";
import PropTypes from "prop-types";

import "../../styles/components/mainComponents/card.css";

export class Card extends Component {
  static displayName = Card.name;

  render() {
    let sizeClassName = null;
    switch (this.props.size) {
      case "sm":
        sizeClassName = "small-card";
        break;
      case "md":
        sizeClassName = "medium-card";
        break;
      case "lg":
        sizeClassName = "large-card";
        break;
      default:
        sizeClassName = "medium-card";
        break;
    }
    return (
      <div className={"site-card border-rad shadow " + sizeClassName}>
        {this.props.header ? (
          <div className="site-card-header">{this.props.header}</div>
        ) : null}
        {this.props.children}
      </div>
    );
  }
}

Card.propTypes = {
  header: PropTypes.string,
  size: PropTypes.string.isRequired,
};
