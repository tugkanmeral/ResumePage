import React, { Component } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { ApiCaller } from "../../service/ApiCaller";
import { Card } from "../mainComponents/Card";
import { Password } from "primereact/password";

import "../../styles/components/subComponents/login.css";

export class Login extends Component {
  static displayName = Login.name;

  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
    };
  }

  render() {
    return (
      <div id="login" className="fill-flex-container">
        <Card header={"Giriş yap"} size="md">
          <div className="p-inputgroup input-margin">
            <span className="p-inputgroup-addon">
              <i className="pi pi-user"></i>
            </span>
            <InputText
              placeholder="E-mail"
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <div className="p-inputgroup input-margin">
            <span className="p-inputgroup-addon">
              <i className="pi pi-lock"></i>
            </span>
            <Password
              feedback={false}
              placeholder="Şifre"
              onChange={(e) => this.setState({ password: e.target.value })}
            />
          </div>
          <Button
            label="Giriş yap"
            className="p-button-raised p-button-text p-button-plain"
            onClick={() => this.login()}
          />
        </Card>
      </div>
    );
  }

  login = async () => {
    let result = await ApiCaller.Post(
      "api/auth",
      { email: this.state.email, password: this.state.password },
      null
    );
    console.log(result);
  };
}
