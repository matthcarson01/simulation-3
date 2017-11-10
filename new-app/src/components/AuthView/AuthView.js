import React, { Component } from "react";

import "./AuthView.css";
import logo from "../../logo.png";

export default class AuthView extends Component {
  render() {
    return (
      <div className="root">
        <div className="auth-parent pink-to-green">
          <div className="auth-child orange-to-yellow">
            <div className="auth-logo-cont">
              <img className="auth-logo" src={logo} alt="logo" />
              <div className="auth-logo-text open-sans-bold">Helo</div>
            </div>
            <div className="auth-link-cont">
              <div className="auth0-div open-sans black-bcg">
                <a className="auth0-link open-sans"> Login / Register </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
