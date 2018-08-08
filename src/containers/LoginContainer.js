import React, { Component } from "react";

// Ant design imports
import { Form, Icon, Input, Button } from "antd";
import { Row, Col } from "antd";
const FormItem = Form.Item;
import { Tabs } from "antd";
const TabPane = Tabs.TabPane;

export default class LoginContainer extends Component {
  state = {
    email: "",
    password: "",
    username: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    // postConfig is used for generating a user token
    const postConfig = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        auth: { email: this.state.email, password: this.state.password }
      })
    };

    fetch("http://localhost:3000/user_token", postConfig)
      .then(res => res.json())
      .then(data => {
        this.props.token(data.jwt);
        return data.jwt;
      })
      .then(token => {
        return fetch("http://localhost:3000/users/current", {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token
          }
        });
      })
      .then(res => res.json())
      .then(user => {
        this.props.user(user);
      });
  };

  handleNewUser = event => {
    // postConfig is used for creating a new user
    const postConfig = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user: {
          email: this.state.email,
          password: this.state.password,
          username: this.state.username
        }
      })
    };
    fetch("http://localhost:3000/users/create", postConfig)
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
  };

  render() {
    return (
      <div style={{ paddingTop: 100 }}>
        <Row>
          <Col span={4}> </Col>
          <Col span={16}>
            <Tabs defaultActiveKey="1">
              <TabPane tab="Login" key="1">
                <Form>
                  <FormItem>
                    <Input
                      type="text"
                      placeholder="email"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                  </FormItem>
                  <FormItem>
                    <Input
                      type="password"
                      placeholder="password"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                    />
                  </FormItem>
                  <FormItem>
                    <Button type="submit" onClick={this.handleSubmit}>
                      Submit
                    </Button>
                  </FormItem>
                </Form>
              </TabPane>
              <TabPane tab="Sign Up" key="2">
                <Form>
                  <FormItem>
                    <Input
                      type="text"
                      placeholder="email"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                  </FormItem>
                  <FormItem>
                    <Input
                      type="password"
                      placeholder="password"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                    />
                  </FormItem>
                  <FormItem>
                    <Input
                      type="text"
                      placeholder="name"
                      name="username"
                      value={this.state.username}
                      onChange={this.handleChange}
                    />
                  </FormItem>
                  <FormItem>
                    <Button type="submit" onClick={this.handleNewUser}>
                      Submit
                    </Button>
                  </FormItem>
                </Form>
              </TabPane>
            </Tabs>
          </Col>
          <Col span={4}> </Col>
        </Row>
      </div>
    );
  }
}
