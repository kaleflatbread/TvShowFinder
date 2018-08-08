import React from "react";
import ShowCard from "./ShowCard";

import { Row, Col } from "antd";

const SearchResults = props => {
  return props.shows.map(show => {
    return (
      <Row>
        <Col span={10}> </Col>
        <Col span={4}>
          <div key={show.id}>
            <ShowCard
              handleModal={props.handleModal}
              show={show}
              onCardClick={props.onCardClick}
            />
          </div>
        </Col>
        <Col span={10}> </Col>
      </Row>
    );
  });
};

export default SearchResults;
