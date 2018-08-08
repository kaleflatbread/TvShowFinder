import React, { Component } from "react";
import { Card, Icon, Avatar } from "antd";
import { Row, Col } from "antd";
export default class ProfileContainer extends Component {
  state = {
    favorites: []
  };

  getFavorites = () => {
    fetch("http://localhost:3000/shows")
      .then(res => res.json())
      .then(data => {
        return data.msg.filter(show => show.user_id === this.props.user.id);
      })
      .then(shows => {
        this.setState({
          favorites: shows
        });
      });
  };

  componentDidMount() {
    if (this.props.user) {
      this.getFavorites();
    }
  }

  componentDidUpdate() {
    if (this.props.user) {
      this.getFavorites();
    }
  }

  showList = () => {
    return this.state.favorites.map(show => {
      const showMatch = this.props.shows.find(
        data => data.id === show.favorite
      );
    return (<div><Card>{showMatch.name} </Card><br/></div>);
    });
  };

  render() {
    return ( 
      <div style={{ paddingTop: 100 }}>
        <Row>
          <Col span={4}> </Col>
          <Col span={16}>
            {this.showList()}
            <Col span={4}> </Col>
          </Col>
        </Row>
      </div>
    );
  }
}
