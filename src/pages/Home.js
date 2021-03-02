import "../../src/styles/pages/home.css";

import React, { Component } from "react";
import { VContainer } from "../components/mainComponents/VContainer";
import { Card } from "../components/mainComponents/Card";
// import { ApiCaller } from "../service/ApiCaller";

export class Home extends Component {
  static displayName = Home.name;

  constructor(props) {
    super(props);
    this.state = {
      experiences: null,
    };
  }

  componentDidMount() {
    this.getExperience();
  }

  render() {
    return (
      <div id="home" className="fill-flex-container home-container">
        <VContainer style={styles.verticalContainerStyles}>
          <h3 className="accent-color">Tecrübeler</h3>
          {this.buildJobExperienceCards()}
        </VContainer>
        <VContainer style={styles.verticalContainerStyles}>
          <h3 className="accent-color"></h3>
        </VContainer>
      </div>
    );
  }

  getExperience = async () => {
    // var response = await ApiCaller.Get("api/experience", null);
    var data = require('../assets/datas/infos.json');

    console.info(data);
    this.setState({ experiences: data.jobExperiences });
  };

  buildJobExperienceCards = () => {
    if (!this.state.experiences) return;
    
    let cards = [];
    
    for (let index = 0; index < this.state.experiences.length; index++) {
      const element = this.state.experiences[index];
      cards.push(
        <Card size="md" key={index}>
          <div style={styles.companyContainer}>
            <div style={styles.companyHeader}>{element.name}</div>
            <small>{element.title}</small>
          </div>
          {this.buildExperienceProjectsList(element.projectExperiences)}
        </Card>
      );
    }

    return cards;
  };

  buildExperienceProjectsList = (_list) => {
    if (!_list) return;
    
    let projectExperiencesList = [];
    for (let index = 0; index < _list.length; index++) {
      const element = _list[index];
      projectExperiencesList.push(
        <div style={styles.projectContainer} key={index}>
          <div style={styles.projectHeader}>{element.name}</div>
          <div style={styles.detailHeader}>{element.detail}</div>
        </div>
      );
    }

    return projectExperiencesList;
  };
}

const styles = {
  companyContainer: {
    marginBottom: "10px",
  },
  verticalContainerStyles: {
    flex: 1,
    alignItems: "center",
  },
  companyHeader: {
    fontWeight: 700,
    color: "rgb(3, 51, 74)",
  },
  projectContainer: {
    borderLeft: "2px solid rgb(3, 51, 74)",
    paddingLeft: "10px",
    marginBottom: "6px",
    marginTop: "6px"
  },
  projectHeader: {
    fontWeight: 500,
  },
  detailHeader: {
    fontWeight: 400,
  },
};
