import React, { Component } from "react";
import { Input } from "antd";
import { Row, Col } from "antd";
import WOW from "wowjs";

const Search = Input.Search;

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ""
    };
  }

  componentDidMount() {
    const wow = new WOW.WOW();
    wow.init();
  }

  onInputChange = term => {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  };

  render() {
    return (
      <div className="wow bounceInDown search-bar" style={{ paddingTop: 100 }} >
        <Row >
          <Col span={8}> </Col>
          <Col span={8}>
            <Search
              value={this.state.term}
              onChange={event => this.onInputChange(event.target.value)}
              placeholder="Type one of your favourite shows"
            />
          </Col>
          <Col span={8}> </Col>
        </Row>
        <br />
      </div>
    );
  }
}
