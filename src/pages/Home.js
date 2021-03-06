import "../../src/styles/pages/home.css";

import React, { Component } from "react";
import { VContainer } from "../components/mainComponents/VContainer";
import { Card } from "../components/mainComponents/Card";
import { Tooltip } from "primereact/tooltip";

export class Home extends Component {
  static displayName = Home.name;

  constructor(props) {
    super(props);
    this.state = {
      experiences: null,
      educations: null,
    };
  }

  componentDidMount() {
    this.getInfos();
  }

  render() {
    return (
      <div id="home" className="fill-flex-container home-container">
        <VContainer style={styles.verticalContainerStyles}>
          <h3 className="accent-color">Tecrübeler</h3>
          {this.buildJobExperienceCards()}
        </VContainer>
        <VContainer style={styles.verticalContainerStyles}>
          <h3 className="accent-color">Eğitim</h3>
          {this.buildEducationCards()}
        </VContainer>
      </div>
    );
  }

  getInfos = () => {
    var data = require("../assets/datas/infos.json");

    this.getExperience(data.jobExperiences);
    this.getEducation(data.educations);
  };

  getEducation = (_educations) => {
    this.setState({ educations: _educations });
  };

  getExperience = async (_jobExperiences) => {
    this.setState({ experiences: _jobExperiences });
  };

  buildJobExperienceCards = () => {
    if (!this.state.experiences) return;

    let cards = [];

    for (let index = 0; index < this.state.experiences.length; index++) {
      const element = this.state.experiences[index];
      cards.push(
        <Card size="md" key={index}>
          <div style={styles.mainContainer}>
            <div style={styles.mainContainerHeader}>{element.name}</div>
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
        <div style={styles.subContainer} key={index}>
          <Tooltip target=".tool-tip-element" mouseTrack mouseTrackLeft={10} />
          <div
            style={styles.subContainerHeader}
            className={element.detail ? "tool-tip-element" : null}
            data-pr-tooltip={element.detail}
          >
            {element.name}
          </div>
          <div style={styles.subContainerText}>{element.tech}</div>
        </div>
      );
    }

    return projectExperiencesList;
  };

  buildEducationCards = () => {
    if (!this.state.educations) return;

    let educations = [];
    for (let index = 0; index < this.state.educations.length; index++) {
      const element = this.state.educations[index];
      educations.push(
        <Card size="md" key={index}>
          <div style={styles.subContainer}>
            <div style={styles.subContainerHeader}>{element.school}</div>
            <div style={styles.subContainerText}>
              {element.start}{" "}
              {element.end != null ? " - " + element.end : "Devam ediyor"}
            </div>
            <div style={styles.subContainerText}>{element.type}</div>
            <div style={styles.subContainerText}>{element.department}</div>
          </div>
        </Card>
      );
    }

    return educations;
  };
}

const styles = {
  mainContainer: {
    marginBottom: "10px",
  },
  verticalContainerStyles: {
    flex: 1,
    alignItems: "center",
  },
  mainContainerHeader: {
    fontWeight: 700,
    color: "rgb(3, 51, 74)",
  },
  subContainer: {
    borderLeft: "2px solid rgb(3, 51, 74)",
    paddingLeft: "10px",
    marginBottom: "6px",
    marginTop: "6px",
  },
  subContainerHeader: {
    fontWeight: 500,
  },
  subContainerText: {
    fontWeight: 400,
  },
};
