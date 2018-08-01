import React, { Component } from "react";
import ShowCard from "../components/ShowCard";
import SuggestedShows from "../components/SuggestedShows";
import BannerCard from "../components/BannerCard";
import { Row, Col } from "antd";
//this.props.selectedCard=entire show instance
export default class SelectedContainer extends Component {
  state = {
    clickedCard: this.props.selectedCard
  };
  selectShows = () => {
    const matchCount = this.props.similarShows.length;
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
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <div>
        <Row>
          <Col span={24}>
            <BannerCard show={this.state.clickedCard}/>
            {/* <ShowCard
              show={this.state.clickedCard}
              handleModal={this.props.handleModal}
            /> */}
          </Col>
          </Row>
          <Row>
          <Col span={8}> </Col>
          <Col span={8}>
            <SuggestedShows
              onClick={this.handleClick}
              similarShows={this.selectShows()}
              handleModal={this.props.handleModal}
              clickedCard={this.state.clickedCard}
            />
          </Col>
          <Col span={8}> </Col>
        </Row>
      </div>
    );
  }
}
