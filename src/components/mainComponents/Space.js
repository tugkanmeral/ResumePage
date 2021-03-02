import React, { Component } from "react";
import PropTypes from "prop-types";

import "../../styles/components/mainComponents/space.css"

export class Space extends Component {
    static displayName = Space.name;

    render(){
        return <div className={this.props.size + "-space"}/>
    }
}

Space.propTypes = {
    size: PropTypes.string.isRequired,
  };
  