import React, { Component } from "react";
import {
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaMediumM,
  FaEnvelope,
} from "react-icons/fa";
// import { ApiCaller } from "../../service/ApiCaller";

import avatar from "../../assets/images/avatar.jpg";
import "../../styles/components/mainComponents/sidebar.css";

export class SideBar extends Component {
  static displayName = SideBar.name;

  constructor(props) {
    super(props);
    this.state = {
      fullName: null,
      title: null,
      company: null,
      companyLink: null,
      description: null,
      linkedin: null,
      medium: null,
      twitter: null,
      instagram: null,
      email: null,
    };
  }

  componentDidMount() {
    this.getOwnerInfo();
  }

  render() {
    return (
      <div id="sidebar-inner" className="fill-flex-container vertical-flex">
        <img src={avatar} alt="Avatar" className="sidebar-avatar shadow"></img>
        <h2 className="person-name accent-color">{this.state.fullName}</h2>
        <p className="person-title">{this.state.title}</p>
        <p className="person-description">{this.state.description}</p>
        <div className="fill-flex-container" />
        <div className="social-media-link-container low-shadow">
          {this.state.linkedin ? (
            <div
              className="social-media-button"
              onClick={() => this.redirect(this.state.linkedin)}
            >
              <FaLinkedinIn size={30} color={"#0e76a8"} />
            </div>
          ) : null}
          {this.state.medium ? (
            <div
              className="social-media-button"
              onClick={() => this.redirect(this.state.medium)}
            >
              <FaMediumM size={30} color={"black"} />
            </div>
          ) : null}
          {this.state.twitter ? (
            <div
              className="social-media-button"
              onClick={() => this.redirect(this.state.twitter)}
            >
              <FaTwitter size={30} color={"#00acee"} />
            </div>
          ) : null}
          {this.state.instagram ? (
            <div
              className="social-media-button"
              onClick={() => this.redirect(this.state.instagram)}
            >
              <FaInstagram size={30} color={"#bc2a8d"} />
            </div>
          ) : null}
          {this.state.email ? (
            <a href={"mailto:"+this.state.email+"?subject=Merhaba "+this.state.fullName+"&body=Selam "+this.state.fullName+", sana blogundan ulaşıyorum."}>
              <div
                className="social-media-button"
              >
                <FaEnvelope size={30} color={"#3d7fc3"} />
              </div>
            </a>
          ) : null}
        </div>
      </div>
    );
  }

  redirect = (_link) => {
    window.open(_link);
  };

  getOwnerInfo = async () => {
    // let response = await ApiCaller.Get("api/owner", null);
    // if (response.success !== true) return;
    // if (response.resultObj == null) return;

    var data = require('../../assets/datas/infos.json');

    this.setState({
      fullName: data.ownerInfos.fullName,
      title: data.ownerInfos.title,
      company: data.ownerInfos.company,
      companyLink: data.ownerInfos.companyLink,
      description: data.ownerInfos.description,
      instagram: data.ownerInfos.instagram,
      linkedin: data.ownerInfos.linkedin,
      twitter: data.ownerInfos.twitter,
      medium: data.ownerInfos.medium,
      email: data.ownerInfos.email,
    });
  };
}
