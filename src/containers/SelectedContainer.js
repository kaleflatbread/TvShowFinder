import React, { Component } from "react";
import ShowCard from "../components/ShowCard";
import SuggestedShows from "../components/SuggestedShows";
import { Row, Col } from "antd";
//this.props.selectedCard=entire show instance
export default class SelectedContainer extends Component {
  state = {
    clickedCard: this.props.selectedCard,
  };
  selectShows = () => {
    const matchCount =  this.props.similarShows.length;
    const suggestedShows = [];

    while (suggestedShows.length < matchCount) {
      const newShow = this.props.similarShows[
        Math.floor(Math.random() * this.props.similarShows.length)
      ];
      const validateShow = suggestedShows.find(
        shows => shows.id === newShow.id
      );
      if (!validateShow) {
        suggestedShows.push(newShow);
      }
    }
    return suggestedShows;
  };

  handleClick = show => {
    this.setState({
      clickedCard: show
    });
  };

  render() {
    return (
      <div>
        <Row>
          <Col span={8}>
            <ShowCard
              show={this.state.clickedCard}
              handleModal={this.props.handleModal}
            />
          </Col>
          <Col span={16}>
            <SuggestedShows
              onClick={this.handleClick}
              similarShows={this.selectShows()}
              handleModal={this.props.handleModal}
              clickedCard={this.state.clickedCard}
            />
          </Col>
        </Row>
      </div>
    );
  }
}
