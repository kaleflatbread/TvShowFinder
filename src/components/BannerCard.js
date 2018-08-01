import React, { Component } from "react";
import { Card } from "antd";
import WOW from "wowjs";

export default class BannerCard extends Component {

  componentDidMount() {
    const wow = new WOW.WOW();
    wow.init();
  }

  componentDidUpdate() {
    const wow = new WOW.WOW();
    wow.init();
  }

  render() {
    return (
      <Card
        style={{
          position: "fixed",
          top: 64,
          width: "100%",
          textAlign: "center",
          zIndex: 1,
          fontSize: 20,
          backgroundColor: "#e3e9f2"
        }}
        className="wow slideInUp"
      >
        <span>
          {" "}
          <img
            src={this.props.show.image.original}
            alt=""
            style={{ width: "5%" }}
          />{" "}
          {this.props.show.name}{" "}
        </span>
      </Card>
    );
  }
}
