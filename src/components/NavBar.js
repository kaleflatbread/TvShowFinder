import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

export default class NavBar extends Component {
  render() {
    return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">Profile</Menu.Item>
            <Menu.Item key="3" style={{ marginLeft: '70%' }}>
              Login
            </Menu.Item>
            <Menu.Item key="4">Logout</Menu.Item>
          </Menu>
        </Header>
      </Layout>
    );
  }
}
