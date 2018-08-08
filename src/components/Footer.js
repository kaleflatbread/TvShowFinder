import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

export default class NavBar extends Component {
  render() {
    return (
      <Layout className="layout">
        <Footer
          style={{
            textAlign: 'center',
            position: 'fixed',
            bottom: 0,
            width: '100%',
          }}
        >
          Created by Jordan, Kayla, Ledio © 2018
        </Footer>
      </Layout>
    );
  }
}
