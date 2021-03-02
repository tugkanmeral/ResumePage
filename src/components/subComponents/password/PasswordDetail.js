import React, { Component } from "react";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Card } from "../../mainComponents/Card";
import { Password } from "primereact/password";
import { ApiCaller } from "../../../service/ApiCaller";
import { Space } from "../../mainComponents/Space";

export class PasswordDetail extends Component {
  static displayName = PasswordDetail.name;

  constructor(props) {
    super(props);
    this.state = {
      name: null,
      pass: null,
      description: null,
    };
  }

  componentDidMount = () => {
    var result = ApiCaller.Get("api/password/1", null);
    result.then((d) => {
      this.setState({ name: d.name, pass: d.pass, description: d.description });
    });
  };

  render() {
    return (
      <Card size="sm">
        <InputText
          value={this.state.name}
          onChange={(e) => this.changeName(e.target.value)}
        />
        <Space size={"sm"}/>
        <InputTextarea
          value={this.state.description}
          onChange={(e) => this.changeDesc(e.target.value)}
          rows={2}
          cols={22}
          autoResize
        />
        <Space size={"sm"}/>
        <Password
          value={this.state.pass}
          onChange={(e) => this.changePass(e.target.value)}
          toggleMask
        />
      </Card>
    );
  }

  changeName = (name) => {
    this.setState({ name });
  };

  changePass = (pass) => {
    this.setState({ pass });
  };

  changeDesc = (description) => {
    this.setState({ description });
  };
}
