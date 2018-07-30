import React, { Component } from 'react';
import { Input } from 'antd';
import { Row, Col } from 'antd';

const Search = Input.Search;

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
    };
  }

  onInputChange = (term) => {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  };

  render() {
    return (
      <div className="search-bar">
        <br />
        <br />
        <br />
        <Row>
          <Col span={8}> </Col>
          <Col span={8}>
            <Search
              value={this.state.term}
              onChange={(event) => this.onInputChange(event.target.value)}
            />
          </Col>
          <Col span={8}> </Col>
        </Row>
      </div>
    );
  }
}
