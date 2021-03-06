import React, { Component } from "react";
import { Layout, Menu, Breadcrumb } from "antd";

const { Header, Content, Footer } = Layout;

import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import LoginContainer from "../containers/LoginContainer";

export default class NavBar extends Component {
  render() {
    return (
      <Layout
        className="layout"
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 1
        }}
      >
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            style={{ lineHeight: "64px" }}
          >
            <Menu.Item
              key="1"
              onClick={() => {
                return this.props.onNavBarReset();
              }}
            >
              <Link to="/home"> Home </Link>
            </Menu.Item>
            <Menu.Item key="2"><Link to="/profile"> Favorites </Link></Menu.Item>
            {this.props.user === null ? (
              <Menu.Item key="3" style={{ marginLeft: "70%" }}>
                <Link to="/login">Login </Link>
              </Menu.Item>
            ) : (
              <Menu.Item style={{ marginLeft: "70%" }}>{this.props.user.username.charAt(0).toUpperCase()+ this.props.user.username.substr(1).toLowerCase()} (Logout)</Menu.Item>
            )}
          </Menu>
        </Header>
      </Layout>
    );
  }
}
